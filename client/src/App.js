import React from 'react';
import Home from './pages/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';


const App = () => {

  const Layout = () => {
    return (
      <div className="app">
        <Outlet/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element:<Layout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
      ]
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
