import HomeContainer from '../containers/HomeContainer'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

export default function HomePage () {
  const { horarioAlumno } = useContext(AuthContext)

  return <HomeContainer horarioAlumno={horarioAlumno} />
}
