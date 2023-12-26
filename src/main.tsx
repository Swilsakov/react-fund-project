import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./app/global.scss";
import { App } from "./app/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
