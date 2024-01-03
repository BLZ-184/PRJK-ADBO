import React from "react";
import { Modal } from "../../components/Elements/Modal";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  DialogBody,
  DialogFooter,
  Input,
  Typography,
} from "@material-tailwind/react";
import { PanelsTopLeft } from "../WebMaker";
import { Upload } from "lucide-react";

const FromFile = ({ open, handleOpen }) => {
  return (
    <Modal
      open={open}
      title={"From Template"}
      handleOpen={handleOpen}
      size={"lg"}
    >
      <DialogBody className="h-[42rem] p-12">
        <div class="border-dashed border-2 border-blue-gray-900 rounded-3xl w-full h-full flex items-center justify-center flex-col">
          <Upload className="h-64 w-64 p-6" color="black" />
          <Typography variant="p">Choose file or Drop it here.</Typography>
        </div>
      </DialogBody>
    </Modal>
  );
};

export default FromFile;

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
      <CardFooter className="grid grid-cols-2 gap-2">
        <Button variant="gradient" fullWidth>
          Create
        </Button>
        <Button variant="gradient" fullWidth>
          Review
        </Button>
      </CardFooter>
    </Card>
  );
}
