import { useMemo } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import { App } from './app'
import { ChildPage } from './child-page'

export const Routes = () => {
  const routes = useMemo(() => {
    return [
      {
        path: '/',
        element: <Navigate to="/app" />,
      },
      {
        path: '/app',
        element: <App />,
      },
      {
        path: '/child',
        element: <ChildPage />,
      },
    ] as RouteObject[]
  }, [])

  const routeELement = useRoutes(routes)

  return routeELement
}
