import "./App.css";
import Auth from "./Component/Auth/Auth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Registration from "./Component/Auth/Registration";
import Rootlayout from "./RootLayout/Rootlayout";
import GeneralInfo from "./Component/GeneralInfo/GeneralInfo";
import Payment from "./Component/Payment/Payment";
import TotalRevenue from "./Component/Admin/TotalRevenue/TotalRevenue";

function App() {
  const router = createBrowserRouter([
    {
      path: "/dashboard",
      element: <Rootlayout />,
      children: [
        {
          path: '', 
          element: <TotalRevenue />
        }
      ],
    },
    {
      path: "/",
      element: <Auth />,
    },
    {
      path: "/create_account",
      element: <Registration />,
    },
    {
      path: "/general_information",
      element: <GeneralInfo />,
    },
    {
      path: "/payment",
      element: <Payment />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
