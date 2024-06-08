import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Helmet } from 'react-helmet-async'
import { z } from "zod";
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';


const signUpForm = z.object({
     restaurantName: z.string(),
     managerName: z.string(),
     phone: z.string(),
     email: z.string().email()
})

type SignInForm = z.infer<typeof signUpForm>

export function SignUp() {
 const navigate = useNavigate()

 const {register, handleSubmit, formState:{isSubmitting},} = useForm<SignInForm>()

 async function handleSignUp(data: SignInForm) {
   try{
       await new Promise((resolve) => setTimeout(resolve,2000))

       toast.success('Enviamos um link de autenticação para seu e-mail.', {
         action: {
           label: 'Login',
           onClick: () => navigate('/sign-in')
         },
       })
     } catch (error) {
       toast.error('Erro ao cadastrar restaurante.')
     }
 }

  return (
    <>
      <Helmet title="Cadastro" />

     <div className='p-8 '>

     <Button  variant="ghost" asChild className='absolute right-8 top-8'>
      <Link to="/sign-in" className=''>
         Fazer login
      </Link>
    </Button>
      <div className='w-[350px] flex-col justify-center gap-6'>
        <div className='flex flex-col gap-2 text-center'>
             <h1 className='text-2xl font-semibold tracking-tighter'>
                Criar conta grátis
             </h1>

             <p className='text-sm text-muted-foreground'>
               Seja um parceiro e comece suas vendas!
             </p>
        </div>
       
       <form  onSubmit={handleSubmit(handleSignUp)} className='space-y-4'>
            <div className='space-y-2'>
               <label htmlFor="restaurantName"> Nome do estabelecimento </label>
               <Input id="restaurantName" type="text" {...register('restaurantName')}/>
            </div>

            <div className='space-y-2'>
               <label htmlFor="managerName">Seu Nome</label>
               <Input id="managerName" type="text" {...register('managerName')}/>
            </div>

            <div className='space-y-2'>
               <label htmlFor="phone">Seu Celular</label>
               <Input id="phone" type="tel"  {...register('phone')}/>
            </div>

            <div className='space-y-2'>
               <label htmlFor="email">Seu e-mail</label>
               <Input id="email" type="email" {...register('email')}/>
            </div>

        

            <Button  disabled={isSubmitting} className='w-full' type='submit'> Acessar painel</Button>

            <p className='px-6 text-center text-sm leading-relaxed text-muted-foreground'>
            Ao continuar, você concorda com nossos{' '}
              <a href="" className="underline underline-offset-4">
                termos de serviço
              </a>{' '}
              e{' '}
              <a href="" className="underline underline-offset-4">
                políticas de privacidade
              </a>

            </p>
       </form>
       
      </div>
     </div>
    </>
  )
}
