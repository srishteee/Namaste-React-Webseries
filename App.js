import React from "react";
import ReactDom from "react-dom/client";
import Header from "./src/components/Header.js";
import Body from "./src/components/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About.js";
import Contact from "./src/components/Contact.js";
import RestaurantMenu from "./src/components/RestaurantMenu.js";




// header
//   logo
//     nav items

//     body
//           searchbar
//            (restaurant container)
//                     restro card
//   footer
//   copyrights
//   links
//   address
//   contact







const AppLayout = () => {
  return ( <div className="app">
 <Header />
 
 <Outlet/>

  </div>
  
  );
  
};
const appRouter = createBrowserRouter([
 {
  path: '/',
  element : <AppLayout/>,
  children: [
    {
        path: "/",
        element: <Body/>
    },
    {
        path: "/about",
        element: <About />
        
      
    },
    {
        path: '/contact',
        element: <Contact />
    },
   
    {
      // for dynamic part : by this colon resID
      path: '/restaurant/:resId',
      element: <RestaurantMenu />,
  },

  ],

  errorElement:<Error/>,
 
},
 
]);


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

