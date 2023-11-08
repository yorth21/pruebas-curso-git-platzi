import { Outlet } from 'react-router-dom'
import Header from '../components/template/Header'
import Footer from '../components/template/Footer'

export default function LayoutPage () {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />

      <main className='flex-1 w-full max-w-6xl mx-auto flex flex-col'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
