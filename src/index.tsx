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
import {Product } from './Pages/Product/Product';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/24",
        element: <TwentyFour />
    },
    {
        path: "product",
        element: <Product />
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
