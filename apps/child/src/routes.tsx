import { useMemo } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import { App } from './app'

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
    ] as RouteObject[]
  }, [])

  const routeELement = useRoutes(routes)

  return routeELement
}
