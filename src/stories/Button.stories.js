import { Button } from "./Button";

// More on default export:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    onClick: { action: "onClick" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "big"],
    },
    color: {
      control: { type: "select" },
      defaultValue: "green",
      options: ["green", "grey", "brown"],
    },
    mode: {
      control: { type: "select" },
      defaultValue: "primary",
      options: ["primary", "secondary", "link"],
    },
  },
};

// More on component templates:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = (args) => {
  let newArgs = { ...args };
  if (args.mode === "link") {
    newArgs.color = "green";
  }

  return Button(newArgs);
};

const commonArgs = {
  disabled: false,
  rounded: false,
  label: "Doppler button",
};

export const Primary = Template.bind({});
Primary.args = {
  ...commonArgs,
  loading: false,
  preloading: false,
};

export const Secondary = Template.bind({});
Secondary.args = { ...commonArgs, mode: "secondary" };

export const Link = Template.bind({});
Link.args = { ...commonArgs, mode: "link" };

export const Icon = Template.bind({});
Icon.args = { ...commonArgs, iconClass: "iconapp-user-interface" };
