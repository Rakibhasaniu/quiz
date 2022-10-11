import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home'
import Topics from './components/Topics/Topics'
import Statictics from './components/Statistics/Statictics';
import Question from './components/Question/Question';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/home',
        element: <Home></Home>
      },
      {
        path:'/topics',
        element: <Topics></Topics>
      },
      {
        path:'/statictics',
        element: <Statictics></Statictics>
      },
      {
        path:'/question',
        element: <Question></Question>
      }
    ]
  },

])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
