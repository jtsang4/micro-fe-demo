import { useMemo } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import { MicroContainer } from './micro-container'

export const Routes = () => {
  const routes = useMemo(() => {
    return [
      {
        path: '/',
        element: <Navigate to="/micro-route/app" />,
      },
      {
        path: '/micro-route/app',
        element: <MicroContainer />,
      },
    ] as RouteObject[]
  }, [])

  const routeELement = useRoutes(routes)

  return routeELement
}
