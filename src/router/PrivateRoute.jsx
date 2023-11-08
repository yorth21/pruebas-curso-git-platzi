import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoute ({ isAllowed, children, redirectTo = '/' }) {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />
  }

  return children || <Outlet />
}
