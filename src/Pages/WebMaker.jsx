import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Breadcrumbs,
  CardFooter,
} from "@material-tailwind/react";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import { LayoutTemplate, Upload } from "lucide-react";
import NewProject from "./WebMaker/NewProject";
import FromTemplate from "./WebMaker/FromTemplate";
import FromFile from "./WebMaker/FromFile";

export const PanelsTopLeft = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-panels-top-left"
      className={className}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  );
};

export default function WebMaker({ setContent }) {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
    console.log(open);
  };
  const handleOpen2 = () => {
    setOpen2(!open2);
    console.log(open2);
  };
  const handleOpen3 = () => {
    setOpen3(!open3);
    console.log(open3);
  };
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
          <a
            onClick={() => {
              setContent(<Dashboard setContent={setContent} />);
            }}
            className="opacity-60"
          >
            Dashboard
          </a>
          <a>Web Maker</a>
        </Breadcrumbs>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CardBoard
            button={"New Project"}
            icon={<PanelsTopLeft />}
            onClick={() => {
              handleOpen();
            }}
          />
          <CardBoard
            button={"From Template"}
            icon={<LayoutTemplate className="h-12 w-12" />}
            onClick={() => {
              handleOpen2();
            }}
          />
          <CardBoard
            button={"From File"}
            icon={<Upload className="h-12 w-12" />}
            onClick={() => {
              handleOpen3();
            }}
          />
        </div>
        <div className="h-1 bg-white rounded-xl my-12" />
        <div className="flex gap-6 my-12">
          <PanelsTopLeft className="h-6 w-6" />
          <Typography variant="h6">Your Project</Typography>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <CardBoard2 title={"Project Test"} desk={"Anjay nii"} />
          <CardBoard2 />
          <CardBoard2 />
          <CardBoard2 />
        </div>
      </div>
      <NewProject open={open} handleOpen={handleOpen} />
      <FromTemplate open={open2} handleOpen={handleOpen2} />
      <FromFile open={open3} handleOpen={handleOpen3} />
    </>
  );
}

export function CardBoard({ button, icon, onClick }) {
  return (
    <Card>
      <CardHeader
        floated={false}
        variant="gradient"
        color="gray"
        className=" grid h-28 place-items-center"
      >
        {icon}
      </CardHeader>
      <CardBody className="grid place-items-center">
        <Button variant="gradient" className="w-48" onClick={onClick}>
          {button}
        </Button>
      </CardBody>
    </Card>
  );
}
export function CardBoard2({ title, desk }) {
  return (
    <Card>
      <CardHeader
        floated={false}
        variant="gradient"
        color="gray"
        className=" grid h-28 place-items-center"
      >
        <PanelsTopLeft />
      </CardHeader>
      <CardBody>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="p">{desk}</Typography>
      </CardBody>
      <CardFooter className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <Button variant="gradient" fullWidth>
            Consult
          </Button>
          <Button variant="gradient" fullWidth>
            Deploy
          </Button>
        </div>
        <Button variant="gradient" fullWidth>
          Open Project
        </Button>
      </CardFooter>
    </Card>
  );
}
