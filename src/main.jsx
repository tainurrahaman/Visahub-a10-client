import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homelayout from "./Layouts/Homelayout.jsx";
import Login from "./Components/Login.jsx";
import SignUp from "./Components/SignUp.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import AddVisa from "./Pages/AddVisa.jsx";
import AllVisas from "./Pages/AllVisas.jsx";
import VisaDetails from "./Pages/VisaDetails.jsx";
import VisaApplication from "./Pages/VisaApplication.jsx";
import UserAddedVisa from "./Pages/UserAddedVisa.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import LatestVisa from "./Components/LatestVisa.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
    children: [
      {
        path: "/",
        element: <LatestVisa></LatestVisa>,
        loader: () => fetch("http://localhost:5000/visas/latest"),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/visas",
    element: <AllVisas></AllVisas>,
    loader: () => fetch("https://visahub-a10-server.vercel.app/visas/all"),
  },
  {
    path: "/visas/:id",
    element: (
      <PrivateRoute>
        {" "}
        <VisaDetails></VisaDetails>
      </PrivateRoute>
    ),
  },
  {
    path: "/addVisa",
    element: (
      <PrivateRoute>
        <AddVisa></AddVisa>
      </PrivateRoute>
    ),
  },
  {
    path: "/visaDetails",
    element: (
      <PrivateRoute>
        <VisaDetails></VisaDetails>
      </PrivateRoute>
    ),
  },
  {
    path: "/visaApplication",
    element: (
      <PrivateRoute>
        <VisaApplication></VisaApplication>
      </PrivateRoute>
    ),
  },
  {
    path: "/userAddedVisa",
    // loader: () => fetch("https://visahub-a10-server.vercel.app/visas"),
    element: (
      <PrivateRoute>
        <UserAddedVisa></UserAddedVisa>
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
