import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyle } from "./styles/GlobalStyles.js";
import {RouterProvider } from "react-router-dom";
import router from "./Routers/index.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>

    <GlobalStyle />

    <RouterProvider router={router}/>
  
  </StrictMode>,
);
