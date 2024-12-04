
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { DialogContent, DialogHeader, DialogDescription, DialogTitle, DialogFooter, DialogClose } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { GetManagedRestaurantResponse, getManagedRestaurant } from "@/api/get-managed-restaurant";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "./ui/textarea";
import { updateProfile } from "@/api/update-profile";
import { toast } from "sonner";

const storeProfileShema = z.object({
    name: z.string().min(1),
    description: z.string().nullable(),
})

type StoreProfileShema = z.infer<typeof storeProfileShema>

export function StoregProfileDialog() {
    const queryClient = useQueryClient()

    const { data: managedRestaurant } =
        useQuery({
            queryKey: ['managed-restaurnt'],
            queryFn: getManagedRestaurant,
            staleTime: Infinity,
        })

    const {
        register,
        handleSubmit,
        formState: {
            isSubmitting
        }

    } = useForm<StoreProfileShema>({
        resolver: zodResolver(storeProfileShema),
        values: {
            name: managedRestaurant?.name ?? '',
            description: managedRestaurant?.description ?? '',
        }
    })

    function updateManagedRestaurantCache({ name, description }: StoreProfileShema) {
        const cached = queryClient.getQueryData<GetManagedRestaurantResponse>([
            'managed-restaurnt',
        ])

        if (cached) {
            queryClient.setQueryData<GetManagedRestaurantResponse>(
                ['managed-restaurnt'],
                {
                    ...cached,
                    name,
                    description,
                },
            )
        }

        return { cached }
    }

    const { mutateAsync: updateProfileFn } = useMutation({
        mutationFn: updateProfile,
        onMutate({ description, name }) {
           const { cached } = updateManagedRestaurantCache({ name, description })
           
           return {previousProfile: cached}

        },

        onError(_, __, context) {
           if(context?.previousProfile) {
            updateManagedRestaurantCache(context.previousProfile)
           }
        }, 
    })

    async function handleUpdateProfile(data: StoreProfileShema) {
        try {
            await updateProfileFn({
                name: data.name,
                description: data.description
            })

            toast.success('Perfil atualizado com sucesso!')

        } catch {
            toast.error('Falha ao atualizar o perfil tente novamente')
        }
    }

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Perfil da loja</DialogTitle>
                <DialogDescription>Atualize as informações do seu estabelecimento visíveis ao seu cliente</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(handleUpdateProfile)}>
                <div className="space-y-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="name">
                            Nome
                        </Label>
                        <Input className="col-span-3" id="name" {...register('name')} />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="description">
                            Descrição
                        </Label>
                        <Textarea className="col-span-3" id="description" {...register('description')} />

                    </div>
                </div>
                <DialogFooter>
                    <DialogClose>
                        <Button variant={"ghost"} type="button">Cancelar</Button>
                    </DialogClose>
                    <Button type="submit" variant={"sucess"} disabled={isSubmitting}>Salvar</Button>
                </DialogFooter>
            </form>
        </DialogContent>
    )
}


