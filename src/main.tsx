import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './Pages/HomePage.tsx'
import TestimonialsSection from './Components/Testimonials/TestimonialsSection.tsx'
import AboutPage from './Pages/AboutPage.tsx'
import Academics from './Pages/Academics.tsx'

const routes=createBrowserRouter([
  {
    element:<Root/>,
    path:"/",
    children:[
      {
        element:<HomePage/>,
        path:'/',

      },
      {
        element:<AboutPage/>,
        path:"about"
      },
      {
        element:<Academics/>,
        path:"academics"
      }
    ]
}],{basename:"/Task-3-adv/"})
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
