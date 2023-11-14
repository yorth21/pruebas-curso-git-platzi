import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Chip,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell
} from '@nextui-org/react'

export default function HomeContainer ({ horarioAlumno }) {
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
            <p>{horarioAlumno.nombreAlumno}</p>
          </div>
        </CardBody>
      </Card>

      <Table aria-label='Tabla horarios'>
        <TableHeader>
          <TableColumn>Dia</TableColumn>
          <TableColumn>Hora</TableColumn>
          <TableColumn>Asignatura</TableColumn>
          <TableColumn>Salon</TableColumn>
          <TableColumn>Tipo</TableColumn>
        </TableHeader>
        <TableBody>
          {horarioAlumno.asignaturas.map((asignatura, index) => (
            <TableRow key={index}>
              <TableCell>{asignatura.dia}</TableCell>
              <TableCell>{formatoHora(asignatura.horaInicio)} - {formatoHora(asignatura.horaFin)}</TableCell>
              <TableCell>{asignatura.nombre}</TableCell>
              <TableCell>{asignatura.ubicacion}</TableCell>
              <TableCell>{asignatura.tipo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )

  /*
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

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {miHorario.asignaturas.map((asignatura, index) => (
          <div key={index} className='col-span-1'>
            <Card>
              <CardHeader>
                <p className='text-sm font-bold'>{asignatura.nombre}</p>
              </CardHeader>
              <Divider />
              <CardBody className='flex flex-col gap-4'>
                {asignatura.horario.map((horario, index) => (
                  <div key={index} className='flex flex-col gap-2'>
                    <div className='flex flex-row justify-between items-center'>
                      <Chip size='sm' className='bg-udenar-primary'>
                        <p className='text-white font-semibold'>{horario.dia.toUpperCase()}</p>
                      </Chip>
                      <p className='text-sm font-semibold'>{formatoHora(horario.horaInicio)} - {formatoHora(horario.horaFin)}</p>
                    </div>
                    <p className='text-sm'>{horario.ubicacion}</p>
                  </div>
                ))}
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
  */
}
