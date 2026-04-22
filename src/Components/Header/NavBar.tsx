
import TopBar from './TopBar'
import NavMenu from './NavMenu'
// "Home","About Us","Academics","Admissions","Student Life","Contact"
const NavMenue=[
          {
            content:"Home",
            path:"/",
          },
          {
            content:"About Us",
            path:"/about",
          },
          {
            content:"Academics",
            path:"/academics",
          },
          {
            content:"Admissions",
            path:"/admissions",
          },
          {
            content:"Student Life",
            path:"/student-life",
          },
          {
            content:"Contact",
            path:"/contact",
          },
        
        ]
const NavBar = () => {
  return (
    <div>
        <TopBar Text="Admission is Open, Grab your seat now" icon='/Task-2-adv/Arrow.png'/>
        <NavMenu logo='/Task-2-adv/Logo.png' NavElemnets={NavMenue}/>
    </div>
  )
}

export default NavBar