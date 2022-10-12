
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home'
import Topics from './components/Topics/Topics'
import Statictics from './components/Statictics/Statictics';
import Question from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/Errorpage';
import Quiz from './components/Quiz/Quiz';
import Header from './components/Header/Header';
import Blog from './components/Blog/Blog';
import Item from './components/Item/Item';

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
        loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Statictics></Statictics>
      },
      {
        path:'/blog',
        element: <Blog></Blog>
      },
      {
        path:'/quiz/:id',
        loader: async({params}) => await fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element: <Topics></Topics>
      },
      {
        path:'/topics',
        loader: async () => {
          return fetch('https://openapi.programming-hero.com/api/quiz')},
        element: <Item></Item>
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
