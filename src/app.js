import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Profile from "./components/Profile";
import Error from "./components/Error";
// import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Shimmer from "./components/Shimmer";

//Dynamic import or lazy loading of Instamart
const Instamart = lazy(() => import("./components/Instamart"));
//Dynamic import or lazy loading of Contact
const Contact = lazy(() => import("./components/Contact"));

//Dynamic import or lazy loading of Contact
const About = lazy(() => import("./components/About"));

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {

  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about", // Here we can also write path:"about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: (
          <Suspense>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "instamart",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],  
  },
]);

root.render(<RouterProvider router={appRouter} />);
