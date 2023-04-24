import { createBrowserRouter } from "react-router-dom";
import About from "../component/pages/about/AboutPage";
import ErrorPage from "../component/pages/error/ErrorPage";
import Home from "../component/pages/home/HomePage";
import HousingPage from "../component/pages/housing/HousingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "logement/:logementId",
    element: <HousingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/aPropos",
    element: <About />,
  },
]);

export default router;
