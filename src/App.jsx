// main.jsx or App.jsx
import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
