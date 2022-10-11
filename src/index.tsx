import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { TwentyFour } from './Pages/TwentyFour/TwentyFour';
import { Sayhello } from './Pages/Helloworld/Sayhello';
import { ErrorPage } from './Pages/Error/ErrorPage';
import { LoginPage } from "./Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "24",
        element: <TwentyFour />
    },
    {
        path: "sayhello",
        element: <Sayhello />
    },
    {
        path: "login",
        element: <LoginPage />
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
