import React from "react";
import { Typography, Card, Breadcrumbs } from "@material-tailwind/react";

export default function Dashboard() {
  return (
    <>
      <div className="mx-auto max-w-screen-xl py-24">
        <Breadcrumbs className="py-12">
          <a
            onClick={() => {
              setContent(<Landing setContent={setContent} />);
            }}
            className="opacity-60"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </a>
          <a>Dashboard</a>
        </Breadcrumbs>
        <Typography variant="h2" color="blue-gray" className="mb-2">
          Dashboard
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
      </div>
    </>
  );
}
