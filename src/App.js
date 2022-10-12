import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Blog from './Components/Blog/Blog';
import Stastic from './Components/Stastic/Stastic';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import DisplayQuiz from './Components/DisplayQuiz/DisplayQuiz';
import Home from './Components/Home/Home';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [

        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          errorElement: <ErrorPage />,
          element: <Home />
        },
        {
          path: '/SingleCart/:SingleCartId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.SingleCartId}`);
          },
          element: < DisplayQuiz />
        },
        {
          path: 'stastic',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Stastic />
        },
        {
          path: 'blog',
          element: <Blog />
        },
        {
          path: '*',
          element: <ErrorPage />
        },
      ]
    }
  ]);


  return (
    <div>

      <RouterProvider router={router} />

    </div>
  );
}

export default App;
