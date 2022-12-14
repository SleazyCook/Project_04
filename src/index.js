import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
// import createBrowser method and the routeprovider component from the react-router 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import ErrorPage from "./components/ErrorPage";
import Settings from "./components/Settings";
import AllPuppies from "./components/AllPuppies";
import AboutUs from "./components/AboutUs";
import Landing from "./components/Landing";
const appElement = document.getElementById("app")
const root = createRoot(appElement)

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/settings",
                element: <Settings />
            },
            {
                path: "/about",
                element: <AboutUs />
            },
            {
                path: "/puppies",
                element: <AllPuppies />
            },
            {
                path: "/home",
                element: <Landing />
            }
        ]
    }
])

//entire original Homepage Component function pulled out from here and pasted into src/Homepage.js

root.render(<RouterProvider router = {router} />);