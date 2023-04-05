import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import './index.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root';
import ItemRoot from './routes/item';
import Cart from './routes/cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomProvider from './context';

//import Layout from '.componentes/Layout';
//import ErrorPage from './rutes/error-page';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/category/:id",
    element: <Root />,
  },
  {
    path: "/item/:id",
    element: <ItemRoot />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <div>CHOECKOUT</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomProvider>
      <RouterProvider router={router}/>
    </CustomProvider>
  </React.StrictMode>
);