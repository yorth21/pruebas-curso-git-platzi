import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import PrivateRoute from './router/PrivateRoute'
import LoginPage from './pages/LoginPage'
import { useContext } from 'react'
import { AuthContext } from './context/authContext'
import HomePage from './pages/HomePage'
import LayoutPage from './pages/LayaoutPage'

function App () {
  const { alumno } = useContext(AuthContext)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute isAllowed={!!alumno.codAlumno} redirectTo='/login' />}>
            <Route path='/' element={<LayoutPage />}>
              <Route path='/' element={<Navigate to='/home' />} />
              <Route path='/home' element={<HomePage />} />
            </Route>
          </Route>

          <Route path='/login' element={<PrivateRoute isAllowed={!alumno.codAlumno} />}>
            <Route path='/login' element={<LoginPage />} />
          </Route>
        </Routes>

        <Toaster position='bottom-right' />
      </BrowserRouter>
    </>
  )
}

export default App
