import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>
  },
  
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
