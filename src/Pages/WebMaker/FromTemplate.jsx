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

const FromTemplate = ({ open, handleOpen }) => {
  return (
    <Modal
      open={open}
      title={"From Template"}
      handleOpen={handleOpen}
      size={"lg"}
    >
      <DialogBody className="h-[42rem] grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 overflow-y-scroll">
        <CardBoard2
          title={"Template 1"}
          desk={"Lorem ipsum dolor sit amet consectetur."}
        />
        <CardBoard2
          title={"Template 2"}
          desk={"Lorem ipsum dolor sit amet consectetur."}
        />
        <CardBoard2
          title={"Template 3"}
          desk={"Lorem ipsum dolor sit amet consectetur."}
        />
        <CardBoard2
          title={"Template 4"}
          desk={"Lorem ipsum dolor sit amet consectetur."}
        />
        <CardBoard2
          title={"Template 5"}
          desk={"Lorem ipsum dolor sit amet consectetur."}
        />
        <CardBoard2
          title={"Template 6"}
          desk={"Lorem ipsum dolor sit amet consectetur."}
        />
        <CardBoard2
          title={"Template 7"}
          desk={"Lorem ipsum dolor sit amet consectetur."}
        />
        <CardBoard2
          title={"Template 8"}
          desk={"Lorem ipsum dolor sit amet consectetur."}
        />
        <CardBoard2
          title={"Template 8"}
          desk={"Lorem ipsum dolor sit amet consectetur."}
        />
        <CardBoard2
          title={"Template 8"}
          desk={"Lorem ipsum dolor sit amet consectetur."}
        />
        <CardBoard2
          title={"Template 8"}
          desk={"Lorem ipsum dolor sit amet consectetur."}
        />
        <CardBoard2
          title={"Template 8"}
          desk={"Lorem ipsum dolor sit amet consectetur."}
        />
      </DialogBody>
    </Modal>
  );
};

export default FromTemplate;

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
