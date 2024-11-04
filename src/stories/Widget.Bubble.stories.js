import { WidgetBubble } from "./Widget.Bubble";

export default {
  title: "Components/Widget.Bubble",
  argTypes: {
    side: {
      options: ["left", "right"],
      control: { type: "radio" },
      description: "Position of the bubble",
      defaultValue: "left",
    },
    device: {
      options: ["desktop", "mobile"],
      control: { type: "radio" },
      description: "Type of device",
      defaultValue: "desktop",
    },
  },
};

const Template = ({ side, device }) => WidgetBubble({ side, device });

export const Default = Template.bind({});
Default.args = {
  side: "left",
  device: "desktop",
};
