import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react'

export default function HomeContainer ({ miHorario }) {
  function formatoHora (numero) {
    if (numero >= 0 && numero <= 11) {
      return numero + ':00 AM'
    } else if (numero === 12) {
      return '12:00 PM'
    } else {
      return (numero - 12) + ':00 PM'
    }
  }

  return (
    <div className='p-6 flex flex-col gap-4'>
      <Card className='bg-green-100 p-2'>
        <CardBody>
          <div className='flex flex-col gap-2 text-udenar-primary'>
            <h2 className='text-3xl font-semibold'>Bienvenidx</h2>
            <p>{miHorario.nombre}</p>
          </div>
        </CardBody>
      </Card>

      <div className='grid grid-cols-4 gap-4'>
        {miHorario.asignaturas.map((asignatura, index) => (
          <div key={index} className='col-span-1'>
            <Card>
              <CardHeader>
                <p className='text-small'>{asignatura.nombre}</p>
              </CardHeader>
              <Divider />
              <CardBody className='flex flex-col gap-4'>
                {asignatura.horario.map((horario, index) => (
                  <div key={index} className='flex flex-col gap-2'>
                    <div className='flex flex-row justify-between'>
                      <p className='text-small'>{horario.dia.toUpperCase()}</p>
                      <p className='text-small font-semibold'>{formatoHora(horario.horaInicio)} - {formatoHora(horario.horaFin)}</p>
                    </div>
                    <p className='text-small'>{horario.ubicacion}</p>
                  </div>
                ))}
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
