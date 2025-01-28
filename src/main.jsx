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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout></Homelayout>,
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
    path: "/allVisas",
    element: <AllVisas></AllVisas>,
    loader: () => fetch("http://localhost:5000/visas"),
  },
  {
    path: "/allVisas/:id",
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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
