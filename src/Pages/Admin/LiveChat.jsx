import React from "react";
import { Typography, Card, Button } from "@material-tailwind/react";
import Chat from "./LiveChat/Chat";

export default function LiveChat({ setContent }) {
  return (
    <>
      <div className="mx-auto max-w-screen-xl py-24">
        <Typography variant="h2" color="blue-gray" className="mb-2">
          Live Chat
        </Typography>
        <Typography color="gray" className="font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Button onClick={() => setContent(<Chat />)}>Chat</Button>
      </div>
    </>
  );
}
