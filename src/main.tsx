import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import StudentLife from './pages/StudentLife';
import Admissions from './pages/Addmision';
import Academic from './pages/Academic';
import Root from './pages/Root';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "academics",
        element: <Academic />
      },
      {
        path: "admissions",
        element: <Admissions />
      },
      {
        path: "studentlife",
        element: <StudentLife />
      },
      {
        path: "contact",
        element: <Contact />
      },
    ]
  }
], {
  basename: "/academy-landing-page"
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
