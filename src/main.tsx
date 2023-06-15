import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { OverlayProvider } from "./assets/components/OverlayContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <OverlayProvider>
      <App />
    </OverlayProvider>
  </React.StrictMode>
);
