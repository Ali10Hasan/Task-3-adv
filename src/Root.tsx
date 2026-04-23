
import { Outlet } from 'react-router'
import NavBar from './Components/Header/NavBar'

import "./App.css"
import FooterSection from './Components/Contact/FooterSection'
const Route = () => {
  return (
    <div className='Container'>
     
      
         <NavBar/>
         <Outlet/>
         <footer>
            <FooterSection/>
        </footer>
    </div>
  )
}

export default Route
