import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  CardBody,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";

const LiveChat = ({ open, setOpen, islogin }) => {
  const handleOpen = () => setOpen(!open);
  const handleChange = () => {};
  return (
    <Dialog open={open} size="xs" handler={handleOpen}>
      {islogin && (
        <>
          <div className="flex items-center justify-between">
            <DialogHeader className="flex flex-col items-start">
              <Typography className="mb-1" variant="h4">
                Live Chat
              </Typography>
            </DialogHeader>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-3 h-5 w-5"
              onClick={handleOpen}
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="mx-0 flex items-center gap-4 pt-0 px-4">
            <Avatar
              size="lg"
              variant="circular"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="tania andrew"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                  Tania Andrew
                </Typography>
                <div className="5 flex items-center gap-0"></div>
              </div>
              <Typography color="blue-gray">Admin Lead @ Google</Typography>
            </div>
          </div>

          <DialogBody className="flex w-full flex-col gap-3 pt-6">
            <div className="flex justify-end">
              <Card
                shadow={false}
                className="bg-gray-400 text-black p-5 ml-16 max-w-fit"
              >
                <CardBody className="p-0">
                  <Typography>Assalamualaikum</Typography>
                </CardBody>
              </Card>
            </div>
            <Card color="gray" shadow={false} className="p-5 mr-16 max-w-fit">
              <CardBody className="p-0">
                <Typography>
                  Hallo, Perkenalkan saya Tania Andrew sebagai Admin Lead. Ada
                  yang bisa saya bantu?
                </Typography>
              </CardBody>
            </Card>
            <div className="flex justify-end">
              <Card
                shadow={false}
                className="bg-gray-400 text-black p-5 ml-16 max-w-fit"
              >
                <CardBody className="p-0">
                  <Typography>boleh pinjam seratus?</Typography>
                </CardBody>
              </Card>
            </div>
          </DialogBody>

          <DialogFooter>
            <div className="relative flex w-full max-w-full">
              <Input
                type="text"
                label="Message"
                // value={message}
                // onChange={onChange}"
                containerProps={{
                  className: "min-w-0",
                }}
              />
              <Button
                size="sm"
                color={"gray"}
                // disabled={!email}
                className="!absolute right-1 top-1 rounded"
              >
                Send
              </Button>
            </div>
          </DialogFooter>
        </>
      )}
      {!islogin && (
        <>
          <div className="flex items-center justify-between">
            <DialogHeader className="flex flex-col items-start">
              <Typography className="mb-1" variant="h4">
                Open Live Chat to Admin
              </Typography>
            </DialogHeader>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-3 h-5 w-5"
              onClick={handleOpen}
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <DialogBody>
            <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
              Write the message and then click button.
            </Typography>
            <div className="grid gap-6">
              <Input label="Username" />
              <Textarea label="Message" />
            </div>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="text" color="gray" onClick={handleOpen}>
              cancel
            </Button>
            <Button variant="gradient" color="gray" onClick={handleChange}>
              send message
            </Button>
          </DialogFooter>
        </>
      )}
    </Dialog>
  );
};

export default LiveChat;
