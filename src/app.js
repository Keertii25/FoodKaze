 import React from "react";
 import ReactDOM from "react-dom/client";
 import Header  from "./components/Header";
 import Body from "./components/Body"
 import Footer from "./components/Footer"
 import About from "./components/About";
 import Error from "./components/Error";
 import Contact from "./components/Contact";
 import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const root=ReactDOM.createRoot(document.getElementById("root"));

const AppLayout= () => {
    return (
    <>
        <Header />
        <Outlet></Outlet>
        <Footer />
    </>
    )
}
const appRouter=createBrowserRouter([{
        path:"/",
        element: <AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element: <Body/>,
            },
            {
                path:"/about",
                element: <About/>,
            },
            {
                path:"/contact",
                element:<Contact/>
            }
        ]
    },
    
])

root.render(<RouterProvider router={appRouter} />); 