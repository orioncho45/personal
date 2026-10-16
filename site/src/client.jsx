import React from "react";
import { hydrateRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { getRoute } from "./routes.jsx";

const route = getRoute(window.location.pathname);
if (route) hydrateRoot(document.getElementById("root"), <App route={route} />);
