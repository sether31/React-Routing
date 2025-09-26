// routes.jsx
import { createBrowserRouter } from "react-router-dom";
// layout
import RootLayout from "./layouts/RootLayout";
// pages
import Home from "./pages/home";
import About from "./pages/about";
import Help from "./pages/help";
import Faq from "./pages/help/faq";
import Contact from "./pages/help/contact";
import ErrorPage from "./pages/errorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { 
        path: "help", 
        element: <Help />,
        children: [
          { path: "faq", element: <Faq/> },
          { path: "contact", element: <Contact/> },
        ]
       },
      { path: "*", element: <ErrorPage />},
    ],
  },
]);

export default router;
