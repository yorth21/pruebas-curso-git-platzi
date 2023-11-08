import escudo from '../assets/escudo.png'
import { Button, Input } from '@nextui-org/react'
import { FaAddressCard, FaCalendarAlt } from 'react-icons/fa'
import { useContext, useState } from 'react'
import { AuthContext } from '../context/authContext'

export default function LoginContainer () {
  const { login } = useContext(AuthContext)
  const [codigo, setCodigo] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)

  const handleCodigoChange = (e) => {
    const value = e.target.value
    if (/^\d{0,9}$/.test(value)) {
      setCodigo(value)
      if (value.length === 9) {
        setIsDisabled(false)
      } else {
        setIsDisabled(true)
      }
    } else {
      setCodigo(codigo)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    await login(codigo)
    setIsLoading(false)
  }

  return (
    <main className='flex flex-col gap-8 justify-center items-center h-screen'>
      <img src={escudo} alt='Escudo Udenar' className='w-36' />
      <form onSubmit={handleSubmit} className='bg-white m-2 flex flex-col gap-4 w-80 p-6 shadow-lg rounded-2xl'>
        <div className='flex flex-row justify-center items-center gap-2 mb-4'>
          <FaCalendarAlt className='text-center text-3xl font-semibold' />
          <h1 className='text-center text-2xl'>Mi horario <b>Udenar</b></h1>
        </div>
        <div className='flex flex-col gap-4'>
          <Input
            type='text'
            inputMode='numeric'
            label='Codigo de estudiante'
            placeholder='Codigo de estudiante'
            labelPlacement='outside'
            value={codigo}
            onChange={e => handleCodigoChange(e)}
            startContent={
              <FaAddressCard className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
            }
          />
        </div>
        <Button
          className='bg-udenar-primary font-semibold text-white'
          type='submit'
          isLoading={isLoading}
          isDisabled={isDisabled}
        >
          Continuar
        </Button>
      </form>
    </main>
  )
}
