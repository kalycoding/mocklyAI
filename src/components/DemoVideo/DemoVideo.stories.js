import { DemoVideo } from ".";

export default {
  title: "Components/DemoVideo",
  component: DemoVideo,

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
  },
};
