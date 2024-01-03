import { Link } from "react-router-dom";
import { Router } from "./router";

function Route() {
  return (
    <>
      <div className="m-5">
        <h1 className="text-2xl font-semibold">All Pages ({Router.length})</h1>
        <ul>
          {Router.map((route) => {
            return (
              <>
                <li key={route.path}>
                  <Link to={route.path} className="text-blue-500 underline">
                    {route.path}
                  </Link>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Route;
