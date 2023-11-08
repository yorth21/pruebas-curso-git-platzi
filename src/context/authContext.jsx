import { createContext, useState } from 'react'
import { post } from '../services/api'
import toast from 'react-hot-toast'

export const AuthContext = createContext()

export function AuthProvider ({ children }) {
  const [alumno, setAlumno] = useState({
    codAlumno: null,
    codReporte: null,
    nombre: null
  })

  const login = async (codAlumno) => {
    try {
      const response = await post('/horario/codreporte', {
        codAlumno
      })
      if (response.success) {
        setAlumno({
          codAlumno: response.data.codAlumno,
          codReporte: response.data.codReporte,
          nombre: response.data.nombre
        })
      } else {
        console.log(response)
        toast.error(response.error.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const logout = async () => {
    setAlumno({
      codAlumno: null,
      codReporte: null,
      nombre: null
    })
  }

  // if (loading) return <Loading />

  return (
    <AuthContext.Provider value={{
      alumno,
      login,
      logout
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}
