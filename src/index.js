import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { Navigate } from 'react-router';
import { app,auth, firestore } from './components/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import ErrorPage from './pages/error';
import Home from './components/home';
import Login from './components/login';
import { IonApp, setupIonicReact } from '@ionic/react';
import Profile from './pages/profile';
import Sidebarx from './components/sidebar';
import Dashboard from './pages/dashboard';
import { NextUIProvider } from '@nextui-org/react';
setupIonicReact();


function RenderApp() {
  const [user, loading, error] = useAuthState(auth);
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
      ],
    },
  ],
    },
    {
      path: "/dashboard",
      element: <Sidebarx/>,
     
      errorElement: <ErrorPage/>,
      action: () => {
        // You can also put the authentication logic directly here
        console.log('Authentication logic for dashboard route');
      },
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            {
              index: true,
              element: <Dashboard/>
            },
           
          ],
        },
      ],
    },
    {
      path: "/profile",
      element: <Sidebarx/>,
      errorElement: <ErrorPage/>,
     
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            {
              index: true,
              element: <Profile/>,
            },
           
          ],
        },
      ],
    },

  ]);
 

  return (
    <>
  
     <IonApp>
   

      <React.StrictMode>

    
    <RouterProvider router={router} />
    
  </React.StrictMode>
 
  </IonApp>
 
   </>
  );
}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<RenderApp />);