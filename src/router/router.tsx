import { createBrowserRouter } from "react-router-dom";
import About from "../component/pages/about/AboutPage";
import ErrorPage from "../component/pages/error/ErrorPage";
import Home from "../component/pages/home/HomePage";
import HousingPage from "../component/pages/housing/HousingPage";
import { pages } from "../ts";

const router = createBrowserRouter([
  {
    path: pages.HOME,
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: pages.HOUSING + ":logementId",
    element: <HousingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: pages.ABOUT,
    element: <About />,
  },
  { path: "*", element: <ErrorPage /> },
]);

export default router;
