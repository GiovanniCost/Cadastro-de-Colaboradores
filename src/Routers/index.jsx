import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import ListWorkers from "../pages/Workers-list";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/lista-de-colaboradores",
    element: <ListWorkers />,
  },
]);

export default router;
