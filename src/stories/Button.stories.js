import { Button } from "./Button";

// Default export
export default {
  title: "Components/Button",
  argTypes: {
    onClick: { action: "onClick" },
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
    size: {
      control: { type: "select", options: ["small", "medium", "big"] },
      table: { disable: false },
    },
    label: {
      control: "text",
      description: "Button text",
      table: { disable: false },
    },
  },
};

// Component template
const Template = (args) => {
  let newArgs = { ...args };
  if (args.mode === "link") {
    newArgs.color = "green";
  }

  return Button(newArgs);
};

// Common args
const commonArgs = {
  disabled: false,
  rounded: false,
  label: "Doppler button",
};

// Primary story
export const Primary = Template.bind({});
Primary.args = {
  ...commonArgs,
  loading: false,
  preloading: false,
};
Primary.parameters = {
  ...Primary.parameters,
  controls: {
    ...Primary.parameters?.controls,
    exclude: ["onlyIcon", "onlyIconSize"],
  },
};

// Secondary story
export const Secondary = Template.bind({});
Secondary.args = {
  ...commonArgs,
  mode: "secondary",
  loading: false,
  preloading: false,
};
Secondary.parameters = {
  ...Secondary.parameters,
  controls: {
    ...Secondary.parameters?.controls,
    exclude: ["onlyIcon", "onlyIconSize"],
  },
};

// Link story
export const Link = Template.bind({});
Link.args = { ...commonArgs, mode: "link", loading: false, preloading: false };
Link.parameters = {
  ...Link.parameters,
  controls: {
    ...Link.parameters?.controls,
    exclude: ["onlyIcon", "onlyIconSize"],
  },
};

// Icon story
export const Icon = Template.bind({});
Icon.args = {
  ...commonArgs,
  iconClass: "iconapp-user-interface",
  onlyIcon: true,
  onlyIconSize: 12,
};

// ArgTypes only for Icon
Icon.argTypes = {
  onlyIcon: {
    control: "boolean",
    name: "Only Icon",
    description: "Show only icon instead of label",
  },
  onlyIconSize: {
    control: {
      type: "select",
      options: [
        0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96, 102,
        108, 114, 120, 126, 132, 138, 144, 150, 156, 162, 168, 174,
      ],
    },
    name: "Only Icon Size",
    description: "Padding value (allowed multiples of 6)",
    if: { arg: "onlyIcon", truthy: true },
  },
  label: { table: { disable: true } },
  size: { table: { disable: true } },
};
