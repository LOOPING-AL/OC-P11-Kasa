import { createBrowserRouter } from "react-router-dom";
import APropos from "../component/pages/about/about-page";
import ErrorPage from "../component/pages/error/error-page";
import Home from "../component/pages/home/home-page";
import HousingPage from "../component/pages/housing/housing-page";

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
    path: "aPropos",
    element: <APropos />,
  },
]);

export default router;
