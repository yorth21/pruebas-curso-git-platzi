import HomeContainer from '../containers/HomeContainer'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/authContext'
import { post } from '../services/api'
import toast from 'react-hot-toast'
import Loading from '../components/template/Loading'

export default function HomePage () {
  const { alumno } = useContext(AuthContext)
  const [miHorario, setMiHorario] = useState([])

  useEffect(() => {
    postHorario()
  }, [])

  const postHorario = async () => {
    const response = await post('/horario', {
      codAlumno: alumno.codAlumno,
      codReporte: alumno.codReporte
    })
    if (response.success) {
      setMiHorario(response.data)
    } else {
      toast.error(response.error.message)
    }
  }

  if (miHorario.length < 1) return <Loading />

  return <HomeContainer miHorario={miHorario} />
}
