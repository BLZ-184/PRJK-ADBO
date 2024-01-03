import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  CardHeader,
} from "@material-tailwind/react";

export function Modal({ open, handleOpen, title, children, size }) {
  return (
    <>
      <Dialog open={open} handler={handleOpen} size={size || "md"}>
        <div className="w-fit">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center px-12"
          >
            {title}
          </CardHeader>
        </div>
        {children}
      </Dialog>
    </>
  );
}
