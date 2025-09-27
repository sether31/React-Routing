// routes.jsx
import { createBrowserRouter } from "react-router-dom";
// layout
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareerLayout from "./layouts/CareerLayout";
// pages
import Home from "./pages/home";
import About from "./pages/about";
import Faq from "./pages/help/faq";
import Contact from "./pages/help/contact";
import ErrorPage from "./pages/errorPage";
import Career, { careerLoader } from "./pages/career/career";
import CareerDetails, { careerDetailsLoader } from "./pages/career/careerDetails";
import CareerError from "./pages/career/careerError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { 
        path: "help", 
        element: <HelpLayout />,
        children: [
          { path: "faq", element: <Faq/> },
          { path: "contact", element: <Contact/> },
        ]
       },
       {
        path: "careers", 
        element: <CareerLayout />,
        errorElement: <CareerError />,
        children: [
          { 
            index: true, 
            element: <Career />,
            loader: careerLoader
          },
          {
            path: ":id",
            element: <CareerDetails />,
            loader: careerDetailsLoader
          }
        ]
       },
      { path: "*", element: <ErrorPage />},
    ],
  },
]);

export default router;
