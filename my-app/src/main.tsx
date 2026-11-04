import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './global.css';

import App from './App.tsx';
import Home from './routes/Home/index.tsx';
import Sobre from './routes/Sobre/index.tsx';
import Faq from './routes/Faq/index.tsx';
import Contato from './routes/Contato/index.tsx';
import Integrantes from './routes/Integrantes/index.tsx';
import Simulador from './routes/Simulador/index.tsx';
import Dashboard from './routes/Dashboard/index.tsx';
import Recompensas from './routes/Recompensas/index.tsx';
import RecompensaDetalhes from './routes/RecompensaDetalhes/index.tsx';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />, 
    children: [
      {path: '/', element: <Home />},
      {path: '/sobre', element: <Sobre />},
      {path: '/faq', element: <Faq />},
      {path: '/contato', element: <Contato />},
      {path: '/integrantes', element: <Integrantes />},
      {path: '/simulador', element: <Simulador />},
      {path: '/dashboard', element: <Dashboard />},
      {path: '/recompensas', element: <Recompensas />},
      {path: '/recompensas/:id', element: <RecompensaDetalhes />}
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);