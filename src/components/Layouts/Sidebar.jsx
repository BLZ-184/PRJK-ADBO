import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Alert,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { PowerIcon } from "@heroicons/react/24/solid";
import { CubeTransparentIcon } from "@heroicons/react/24/outline";
import Dashboard from "../../Pages/Admin/Dashboard";
import WebMaker from "../../Pages/WebMaker";
import Konsultasi from "../../Pages/Konsultasi";
import Deploy from "../../Pages/Deploy";
import {
  Coins,
  HeartHandshake,
  Layout,
  LayoutDashboardIcon,
  MessagesSquare,
  Server,
  Users,
  PieChart,
  HelpingHand,
  Computer,
} from "lucide-react";
import Account from "../../Pages/Admin/Account";
import LiveChat from "../../Pages/Admin/LiveChat";
import Sales from "../../Pages/Admin/Sales";
import ServicesStatus from "../../Pages/Hostinger/ServicesStatus";
import SystemStats from "../../Pages/Hostinger/SystemStats";
import Konsultan from "../../Pages/Konsultan/Konsultan";

export default function Sidebar({ onInteraction, setLogin }) {
  const Menus = [
    {
      name: "Dashboard",
      icon: <LayoutDashboardIcon className="h-5 w-5" />,
      url: <Dashboard setContent={onInteraction} />,
      gap: true,
    },
    {
      name: "Services Status",
      icon: <PieChart className="h-5 w-5" />,
      url: <ServicesStatus setContent={onInteraction} />,
    },
    {
      name: "System Stats",
      icon: <Computer className="h-5 w-5" />,
      url: <SystemStats setContent={onInteraction} />,
      gap: true,
    },
    {
      name: "Konsultan",
      icon: <HelpingHand className="h-5 w-5" />,
      url: <Konsultan setContent={onInteraction} />,
      gap: true,
    },
    {
      name: "Account",
      icon: <Users className="h-5 w-5" />,
      url: <Account setContent={onInteraction} />,
    },
    {
      name: "Live Chat",
      icon: <MessagesSquare className="h-5 w-5" />,
      url: <LiveChat setContent={onInteraction} />,
    },
    {
      name: "Sales",
      icon: <Coins className="h-5 w-5" />,
      url: <Sales setContent={onInteraction} />,
      gap: true,
    },
    {
      name: "Web Maker",
      icon: <Layout className="h-5 w-5" />,
      url: <WebMaker setContent={onInteraction} />,
    },
    {
      name: "Konsultasi",
      icon: <HeartHandshake className="h-5 w-5" />,
      url: <Konsultasi setContent={onInteraction} />,
    },
    {
      name: "Deploy",
      icon: <Server className="h-5 w-5" />,
      url: <Deploy setContent={onInteraction} />,
    },
  ];

  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const [dialog, setdialog] = React.useState(false);

  const handledialog = () => setdialog(!dialog);

  return (
    <>
      <Card className="fixed h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <List className="mt-16">
          {Menus &&
            Menus.map((Menus) => (
              <>
                <ListItem onClick={() => onInteraction(Menus.url)}>
                  <ListItemPrefix>{Menus.icon}</ListItemPrefix>
                  {Menus.name}
                  <ListItemSuffix></ListItemSuffix>
                </ListItem>
                {Menus.gap && <hr className="my-2 border-blue-gray-50" />}
              </>
            ))}
          <hr className="my-2 border-blue-gray-50" />
          <ListItem onClick={handledialog}>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
        <Alert
          open={openAlert}
          className="mt-auto"
          onClose={() => setOpenAlert(false)}
        >
          <CubeTransparentIcon className="mb-4 h-12 w-12" />
          <Typography variant="h6" className="mb-1">
            Upgrade to PRO
          </Typography>
          <Typography variant="small" className="font-normal opacity-80">
            Upgrade to Material Tailwind PRO and get even more components,
            plugins, advanced features and premium.
          </Typography>
          <div className="mt-4 flex gap-3">
            <Typography
              as="a"
              href="#"
              variant="small"
              className="font-medium opacity-80"
              onClick={() => setOpenAlert(false)}
            >
              Dismiss
            </Typography>
            <Typography as="a" href="#" variant="small" className="font-medium">
              Upgrade Now
            </Typography>
          </div>
        </Alert>
      </Card>
      <Dialog open={dialog} handler={handledialog}>
        <DialogHeader>Logout</DialogHeader>
        <DialogBody>Apakah anda yakin untuk Logout?</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handledialog}
            className="mr-1"
          >
            <span>Batal</span>
          </Button>
          <Button
            variant="gradient"
            color="black"
            onClick={() => {
              setLogin(false);
              localStorage.removeItem("FiveWm");
              onInteraction(false);
            }}
          >
            <span>Yakin</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
