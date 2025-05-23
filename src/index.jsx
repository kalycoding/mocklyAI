import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Web } from "./screens/Web";
import { Analytics } from '@vercel/analytics/next';

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Analytics />
    <Web />
  </StrictMode>
);
