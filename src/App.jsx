import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/Mainpage'
import './App.css'
import Moviedet from './pages/Moviedet';

function App() {
    const router = createBrowserRouter([
    {
      path: '/',
      element: <><MainPage /></>
    },
    {
      path: '/movie/:id',
      element: <><Moviedet /></>
    }
  ])
  

  return (
    <RouterProvider router={router}/>
  );
}




export default App
