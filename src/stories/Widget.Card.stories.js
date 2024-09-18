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
    ribbon: {
      control: { type: "boolean" },
      description: "Show or hide the new feature ribbon",
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

const Template = ({ bgColor, ribbon, message }) =>
  WidgetCard({ bgColor, ribbon, message });

export const Default = Template.bind({});
Default.args = {
  bgColor: "dp-red",
  ribbon: false,
  message: null,
};

export const WithRibbon = Template.bind({});
WithRibbon.args = {
  bgColor: "dp-red",
  ribbon: true,
  message: null,
};

export const WithMessage = Template.bind({});
WithMessage.args = {
  bgColor: "dp-red",
  ribbon: false,
  message: {
    title: "Hover Title",
    description: "This is a hover message description.",
    link: "#",
  },
};
