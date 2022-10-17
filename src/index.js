import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
// import createBrowser method and the routeprovider component from the react-router 
import { createbroswer, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage";
import ErrorPage from "./components/ErrorPage";
import Settings from "./components/Settings";
import AllPuppies from "./components/AppPuppies";
import AboutUs from "./components/AboutUs";
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
                element: <Setting />
            },
            {
                path: "/about",
                element: <Settings />
            },
            {
                path: "/puppies",
                element: <AllPuppies />
            }
        ]
    }
])

//entire original Homepage Component function pulled out from here and pasted into src/Homepage.js

ReactDOM.render(<Homepage />, document.getElementById("app"));