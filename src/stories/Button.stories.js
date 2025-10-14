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
      if: { arg: "onlyIcon", truthy: false },
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
    label: {
      control: "text",
      if: { arg: "onlyIcon", truthy: false },
      description: "Button text",
    },
    onlyIcon: {
      control: "boolean",
      name: "Only Icon",
      description: "Show only icon instead of label",
    },
    onlyIconSize: {
  control: {
    type: "select",
    options: [
      0, 6, 12, 18, 24, 30, 36, 42, 48, 54,
      60, 66, 72, 78, 84, 90, 96, 102, 108,
      114, 120, 126, 132, 138, 144, 150, 156,
      162, 168, 174,
    ],
  },
  name: "Only Icon Size",
  description: "Padding value (allowed multiples of 6 from $spaceamounts)",
  if: { arg: "onlyIcon", truthy: true },
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
  onlyIcon: false,
  onlyIconSize: 8,
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
Icon.args = {
  ...commonArgs,
  iconClass: "iconapp-user-interface",
  onlyIcon: false,
  onlyIconSize: 10,
};
