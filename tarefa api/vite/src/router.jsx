// router.jsx
import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/login';
import Registro from './pages/Registro';
import Tarefas from './pages/Tarefas';

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/registro', element: <Registro /> },
  { path: '/tarefas', element: <Tarefas /> },
]);

export default router;
