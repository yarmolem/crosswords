import { RouterProvider, createBrowserRouter } from 'react-router'

import HomePage from '@/pages/home.page'
import LoadingPage from '@/pages/loading.page'
import RootLayout from '@/components/layout/root-layout'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/play/:slug',
        hydrateFallbackElement: <LoadingPage />,
        lazy: async () => {
          const { default: PlayPage } = await import('@/pages/play.page')
          return { Component: PlayPage }
        }
      }
    ]
  }
])

export default function RootRouter() {
  return <RouterProvider router={router} />
}
