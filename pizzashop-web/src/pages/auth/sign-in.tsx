import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { signIn } from '@/api/sign-in'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const singInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof singInForm>

export function SignIn() {
  const [searchParams] = useSearchParams() // pega o parametro da url que foi passado no sign-in

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get('email') ?? '', // coloca como default value
    },
  })

  const { mutateAsync: authenticate } = useMutation({
    // mutateAsync = todo o put, delete, post é uma mutação   && authenticate = roda a função
    mutationFn: signIn, // função que vai rodar
  })

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticate({ email: data.email }) // passa o email para função

      toast.success('Enviamos um link de autenticação para seu e-mail', {
        action: {
          label: 'Reenviar',
          onClick: () => {
            handleSignIn(data)
          },
        },
      })
    } catch (error) {
      toast.error('Credenciais inválidas.')
    }
  }

  return (
    <>
      <Helmet title="Login" />

      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-up" className="">
            Novo estabelecimento
          </Link>
        </Button>
        <div className="w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Acessar painel
            </h1>

            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email">Seu e-mail</label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              {' '}
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
