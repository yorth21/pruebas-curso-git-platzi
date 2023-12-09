import { NavLink } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

export default function NotFoundPage () {
  return (
    <main className='h-screen w-full flex flex-col justify-center items-center'>
      <h1 className='text-9xl font-extrabold text-[#1A2238] tracking-widest'>404</h1>
      <div className='bg-udenar-primary text-white px-2 text-sm rounded rotate-12 absolute'>
        Pagina no encontrada
        <i>Main 2</i>
      </div>
      <NavLink
        to='/'
        className='text-udenar-primary font-semibold text-xl mt-4 hover:underline'
      >
        <FaArrowLeft className='inline-block mr-2' />
        Regresar al inicio
      </NavLink>
    </main>
  )
}
