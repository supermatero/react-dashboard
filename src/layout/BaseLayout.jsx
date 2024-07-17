
import { Outlet } from 'react-router-dom'
import  Sidebar  from '../components/sidebar/sidebar'
export default function BaseLayout() {
  return (
    <main className='page-wrapper'>
      <Sidebar/>
      <div className='content-wrapper'>
        <Outlet/>
      </div>
    </main>
  )
}
