import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './Components/home.jsx';
import About from './Components/about.jsx';
import Contact from './Components/contact.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App is our layout with Header and Footer
    children: [
      {
        path: '',
        element: <Home />, // Home renders inside the Outlet in App
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
