import { Pill } from "./Pill";

export default {
  title: "Components/Pill",
  argTypes: {
    text: {
      control: "text",
      description: "Text inside the pill",
      defaultValue: "Junio 2024 - Septiembre 2024",
    },
    removable: {
      control: "boolean",
      defaultValue: true,
      description: "Show or hide the close button",
    },
    expandable: {
      control: "boolean",
      defaultValue: false,
      description: "It allows the text to grow without displaying '...'",
    },
    color: {
      control: { type: "select" },
      options: ["green"],
      defaultValue: "green",
      description: "Border and background color",
    },
  },
};

const Template = (args) => Pill(args);

const commonArgs = {
  text: "Septiembre 2024 - Septiembre 2025",
  removable: true,
  expandable: false,
  color: "green",
};

export const Green = Template.bind({});
Green.args = { ...commonArgs };

export const WithoutClose = Template.bind({});
WithoutClose.args = {
  ...commonArgs,
  removable: false,
};

export const Expandable = Template.bind({});
Expandable.args = {
  ...commonArgs,
  expandable: true,
};
