import App from "./App";
import Login from "./Pages/Login";

export const Router = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];
