import { Image } from ".";

export default {
  title: "Components/Image",
  component: Image,

  argTypes: {
    property1: {
      options: ["hovered", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "hovered",
    className: {},
    maskGroup: "/img/mask-group.png",
  },
};
