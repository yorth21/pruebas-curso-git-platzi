import { Link } from 'react-router-dom'
import { Tooltip } from '@nextui-org/react'
import { FaCalendarAlt, FaSignInAlt } from 'react-icons/fa'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

export default function Header () {
  const { logout } = useContext(AuthContext)

  return (

    <header className='bg-udenar-primary sticky top-0 z-40'>
      <div className='container max-w-6xl mx-auto py-2'>
        <div className='px-6 py-2 flex flex-row items-center justify-between gap-2'>
          <Link to='/' className='flex flex-row justify-center items-center gap-2 text-white'>
            <FaCalendarAlt className='text-center text-4xl font-semibold' />
            <h1 className='text-center text-3xl'>Mi horario <b>Udenar</b></h1>
          </Link>

          <h3>Yorth21</h3>

          <Tooltip content='Salir'>
            <button className='text-white text-3xl' onClick={logout}>
              <FaSignInAlt />
            </button>
          </Tooltip>
        </div>
      </div>
    </header>
  )
}
