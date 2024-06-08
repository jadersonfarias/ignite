import { createBrowserRouter } from 'react-router-dom'
import { Dashboaard } from './pages/app/deshboard'
import { SignIn } from './pages/auth/sign-in'
import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { SignUp } from './pages/auth/sign-up'
import { Orders } from './pages/app/ordes/orders'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,

    children: [
      { path: '/', element: <Dashboaard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },

  {
    path: '/',
    element: <AuthLayout />,

    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
])
