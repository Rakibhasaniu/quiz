
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home'
import Topics from './components/Topics/Topics'
import Statictics from './components/Statictics/Statictics';
import Question from './components/Question/Question';
import ErrorPage from './components/ErrorPage/Errorpage';
import Quiz from './components/Quiz/Quiz';
import Header from './components/Header/Header';

const router = createBrowserRouter([
  {
    path:'/',
    errorElement: <ErrorPage></ErrorPage>,
    loader: async () => await fetch('https://openapi.programming-hero.com/api/quiz'),
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
        path:'/header',
        element: <Header></Header>
      },
      {
        path:'/statictics',
        element: <Statictics></Statictics>
      },
      {
        path:'/question',
        element: <Question></Question>
      },
      {
        path:'/quiz/:id',
        loader: async({params}) => await fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element: <Topics></Topics>
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
