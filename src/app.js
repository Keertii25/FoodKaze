import React, { Children, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import { img_cdn_url } from "./consets";
import Footer from "./components/footer";
import About from "./components/About";
import { Suspense } from "react";
import Error from "./components/Error";
import Shimmer from "./components/shimmer";
import Contact from "./components/contactus";
import Reastrutmenu from "./components/restrautantmenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Profile from "./components/profle";
import UserContext from "./utils/UserContext";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./utils/Store";

// dynamic import lazy loading
const Instamart=lazy(()=>import("./components/Instamart"))
const Applayout=() =>{
    const[user,setuser]=useState({
     name:"Keerti",
     email:"k.m.meena2004@gmail.com",
    });
    

    return(
        
        <Provider store={store}>
         
        <UserContext.Provider
         value={{
            user: user,
        }}>
       <Header/>
       <Outlet/>  
       <Footer/>
        </UserContext.Provider>
      
       
        </Provider>  
        
    );
};

const appRouter=createBrowserRouter([
    {
       path:"/",
       element:<Applayout/>,
       errorElement: <Error/>,
    
    children: [
        {
            path:"/about",
            element:<About/>,
            children: [
                {   
                path:"profile",
                element: <Profile/>,
             },
            ],
        },
        {
            path:"/",
            element:<Body user={{
                name:"Keerti",
                email:"k.m.meena2004@gmail.com",
               }}/>,
           
        },

       
        {
            path:"/contact",
            element:<Contact/>,

        },
        {
            path:"/restrautent/:resId",
            element: <Reastrutmenu/>,
        },
        {
            path:"/Instamart",
            element:<Suspense fallback={<Shimmer/>}><Instamart/></Suspense> ,
        },
        {
            path:"/cart",
            element: <Cart/>
        }
    ]
},
     
]);

  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={appRouter}/>);