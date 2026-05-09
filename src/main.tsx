import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./config/routes.ts";
import { Login } from "./pages/login/index.tsx";
import { pageRoutes } from "./config/page-router.tsx";
import Layout from "./components/common/Layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} index element={<Login />} />
        <Route path={ROUTES.HOME} element={<Layout />}>
          {pageRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
