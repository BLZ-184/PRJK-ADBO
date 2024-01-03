import React, { useEffect } from "react";
import Navbar from "./components/Layouts/Navbar";
import Sidebar from "./components/Layouts/Sidebar";
import Landing from "./Pages/Landing";

export default function App() {
  const [isLogin, setLogin] = React.useState(false);
  const [content, setContent] = React.useState(false);

  const handleSidebarInteraction = (props) => {
    console.log(props);
    setContent(props);
  };
  const localStorage = window.localStorage;
  let sessionData = localStorage["FiveWm"];
  const Session = sessionData && JSON.parse(sessionData);

  useEffect(() => {
    if (Session) {
      setLogin(true);
    }
  }, []);

  return (
    <>
      <Navbar
        isLogin={isLogin}
        setLogin={setLogin}
        onInteraction={handleSidebarInteraction}
      />
      {isLogin && (
        <Sidebar setLogin={setLogin} onInteraction={handleSidebarInteraction} />
      )}
      <div
        className={
          `min-h-screen bg-blue-gray-50 px-10 lg:px-5 ` +
          (isLogin && `  lg:ml-[20rem]`)
        }
      >
        {content ? content : <Landing />}
      </div>
    </>
  );
}
