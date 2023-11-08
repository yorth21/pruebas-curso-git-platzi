import { Spinner } from '@nextui-org/react'

export default function Loading () {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Spinner size='lg' label='Cargando...' color='success' labelColor='success' />
    </div>
  )
}
