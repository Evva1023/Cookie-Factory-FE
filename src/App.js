import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Footer} from "./components/Footer";
import {Order} from "./components/Order";
import {Summary} from "./components/Summary";

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/order",
        element: <Order />
      },
      {
        path: "/summary",
        element: <Summary />
      }
    ]
  }
]);

export const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};