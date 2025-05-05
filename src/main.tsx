import { createRoot } from "react-dom/client";
import * as React from "react";
import { Toaster } from "react-hot-toast";
import { StrictMode } from "react";
import App from "./App";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
    <Toaster />
  </StrictMode>
);
