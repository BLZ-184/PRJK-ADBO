import React from "react";
import {
  Card,
  Navbar as NavbarComponent,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import Login from "../Fragments/Login";
import Register from "../Fragments/Register";
import LiveChat from "../Fragments/LiveChat";
import Test from "../../Pages/Test";
import Landing from "../../Pages/Landing";

const menuItems = [
  {
    title: "Web maker",
    to: "#WebMaker",
  },
  {
    title: "Konsultasi",
    to: "#Konsultasi",
  },
  {
    title: "Deploy",
    to: "#Deploy",
  },
];

// const Navbar = ({ isLogin }) => {
const Navbar = ({ isLogin, setLogin, onInteraction }) => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [openRegister, setOpenRegister] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openLiveChat, setOpenLiveChat] = React.useState(false);
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
        onClick={() => onInteraction(<Landing />)}
      >
        <a href="#pricing" className="flex items-center">
          Pricing
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a
          href="#"
          className="flex items-center"
          onClick={() => setOpenLiveChat((cur) => !cur)}
        >
          Live Chat
        </a>
      </Typography>
      {isLogin && (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a
            href="#"
            className="flex items-center"
            onClick={() => onInteraction(<Test />)}
          >
            Dashboard
          </a>
        </Typography>
      )}
    </ul>
  );

  return (
    <div>
      <NavbarComponent className="fixed top-0 z-10 rounded-none shadow-none h-max max-w-full px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center gap-4">
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 font-bold"
            >
              FiveWM
            </Typography>
            <div className="hidden lg:block">
              <Menu open={openMenu} handler={setOpenMenu} allowHover>
                <MenuHandler>
                  <Button
                    variant="text"
                    size="sm"
                    className="flex items-center gap-3 text-sm font-normal capitalize tracking-normal"
                  >
                    Product
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className={`h-3.5 w-3.5 transition-transform ${
                        openMenu ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                </MenuHandler>
                <MenuList className="hidden max-w-sm gap-3 overflow-visible lg:grid">
                  <ul className="col-span-4 flex w-full flex-col gap-1">
                    {menuItems.map(({ title, description, to }) => (
                      <a
                        href={to}
                        key={title}
                        onClick={() => onInteraction(<Landing />)}
                      >
                        <MenuItem>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-1"
                          >
                            {title}
                          </Typography>
                          <Typography
                            variant="small"
                            color="gray"
                            className="font-normal"
                          >
                            {description}
                          </Typography>
                        </MenuItem>
                      </a>
                    ))}
                  </ul>
                </MenuList>
              </Menu>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {!isLogin && (
              <div className="flex items-center gap-x-1">
                <Button
                  variant="text"
                  size="sm"
                  className="hidden lg:inline-block"
                  onClick={() => setOpenLogin((cur) => !cur)}
                >
                  <span>Log In</span>
                </Button>
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                  onClick={() => setOpenRegister((cur) => !cur)}
                >
                  <span>Sign Up</span>
                </Button>
              </div>
            )}
            {isLogin && (
              <div className="flex items-center gap-x-1">
                <Menu>
                  <MenuHandler>
                    <Button
                      variant="gradient"
                      size="sm"
                      className="hidden lg:inline-block"
                    >
                      <span>M Iqbal</span>
                    </Button>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem onClick={() => setLogin(false)}>Log Out</MenuItem>
                  </MenuList>
                </Menu>
              </div>
            )}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <a href="#" className="flex items-center">
              Product
            </a>
          </Typography>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </NavbarComponent>
      <Login
        open={openLogin}
        setOpen={setOpenLogin}
        setOpenRegister={setOpenRegister}
        setLogin={setLogin}
      />
      <Register
        open={openRegister}
        setOpen={setOpenRegister}
        setOpenLogin={setOpenLogin}
      />
      <LiveChat
        open={openLiveChat}
        setOpen={setOpenLiveChat}
        islogin={isLogin}
      />
    </div>
  );
};

export default Navbar;
