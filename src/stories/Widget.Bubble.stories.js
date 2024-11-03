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
  },
};

const Template = ({ side }) => WidgetBubble({ side });

export const Default = Template.bind({});
Default.args = {
  side: "left",
};
