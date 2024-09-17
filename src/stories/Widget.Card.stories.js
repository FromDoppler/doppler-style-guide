import { WidgetCard } from "./Widget.Card";

export default {
  title: "Components/Widget.Card",
  argTypes: {
    bgColor: {
      description:
        "Background color class for the icon, must be a valid dolor in the library",
      control: { type: "select" },
      defaultValue: "dp-green",
      options: ["dp-green", "dp-yellow", "dp-red"],
    },
    banner: {
      control: { type: "boolean" },
      description: "Show or hide the new feature banner",
      defaultValue: false,
    },
    message: {
      control: {
        type: "object",
      },
      description:
        "Message to display on hover, must have title, description and link",
      defaultValue: null,
    },
  },
};

const Template = ({ bgColor, banner, message }) =>
  WidgetCard({ bgColor, banner, message });

export const Default = Template.bind({});
Default.args = {
  bgColor: "dp-red",
  banner: false,
  message: null,
};

export const WithBanner = Template.bind({});
WithBanner.args = {
  bgColor: "dp-red",
  banner: true,
  message: null,
};

export const WithMessage = Template.bind({});
WithMessage.args = {
  bgColor: "dp-red",
  banner: false,
  message: {
    title: "Hover Title",
    description: "This is a hover message description.",
    link: "#",
  },
};
