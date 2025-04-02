import LoadingPage from '@/pages/loading.page'
import { RouterProvider, createBrowserRouter } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    hydrateFallbackElement: <LoadingPage />,
    lazy: async () => {
      const { default: HomePage } = await import('@/pages/home.page')
      return { Component: HomePage }
    }
  },
  {
    path: '/play',
    hydrateFallbackElement: <LoadingPage />,
    lazy: async () => {
      const { default: PlayPage } = await import('@/pages/play.page')
      return { Component: PlayPage }
    }
  }
])

export default function RootRouter() {
  return <RouterProvider router={router} />
}
