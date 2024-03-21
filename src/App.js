import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";


const AppLayout = () => {
  const [userName, setUserName] = useState("none");
  
  useEffect(() => {
    const data = {
      name: "Priyank Singhal"
    }
    setUserName(data.name)
  }, [])
  return (
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
      <div className="app">
    {/* <UserContext.Provider value={{loggedInUser: "Singhal"}}> */}
        <Header />
    {/* </UserContext.Provider> */}
        <Outlet />
      </div>
    </UserContext.Provider>
  )
};

const Drinks = lazy(() => import("./components/Drinks"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/drinks",
        element: <Suspense fallback={<Shimmer />}><Drinks /></Suspense>
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
