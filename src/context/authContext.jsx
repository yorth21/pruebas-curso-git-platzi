import { createContext, useEffect, useState } from 'react'
import { getLocalStorage, post, removeLocalStorage, setLocalStorage } from '../services/api'
import toast from 'react-hot-toast'

export const AuthContext = createContext()

export function AuthProvider ({ children }) {
  // Usar un loading para mostrar un spinner mientras se comprueba el token
  const [horarioAlumno, setHorarioAlumno] = useState(null)
  const TTL = 1000 * 60 * 60 * 24 * parseInt(import.meta.env.VITE_TTL_DIAS)

  useEffect(() => {
    checkLocalStorage()
  }, [])

  const checkLocalStorage = () => {
    const ultimaAct = getLocalStorage('ultimaAct')
    if (!ultimaAct || Date.now() - ultimaAct > TTL) return logout()

    const horario = JSON.parse(getLocalStorage('horario'))
    if (!horario || !horario.codAlumno) return logout()

    setHorarioAlumno(horario)
  }

  const login = async (codAlumno) => {
    try {
      const response = await post('/horario/asignaturasDia', {
        codAlumno: parseInt(codAlumno)
      })
      if (response.success) {
        setHorarioAlumno(response.data)
        setLocalStorage('horario', JSON.stringify(response.data))
        setLocalStorage('ultimaAct', Date.now())
      } else {
        toast.error(response.error.message)
      }
    } catch (err) {
      toast.error('Error al obtener el horario')
    }
  }

  const logout = async () => {
    setHorarioAlumno(null)
    removeLocalStorage('horario')
    removeLocalStorage('ultimaAct')
  }

  // if (loading) return <Loading />

  return (
    <AuthContext.Provider value={{
      horarioAlumno,
      login,
      logout
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}
