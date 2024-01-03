import React from "react";
import { Modal } from "../../components/Elements/Modal";
import {
  Button,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";

const NewProject = ({ open, handleOpen }) => {
  return (
    <Modal
      open={open}
      title={"New Project"}
      handleOpen={handleOpen}
      size={"xs"}
    >
      <DialogBody className="grid gap-4">
        <Input label="Project Name" />
        <Input label="Project Description" />
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={handleOpen}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Modal>
  );
};

export default NewProject;
