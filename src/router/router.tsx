import { createBrowserRouter } from "react-router-dom";
import APropos from "../component/about/about-page";
import ErrorPage from "../component/error/error-page";
import Home from "../component/home/home-page";
import HousingPage from "../component/housing/housing-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "logement/:logementId",
    element: <HousingPage />,
  },
  {
    path: "aPropos",
    element: <APropos />,
  },
]);

export default router;
