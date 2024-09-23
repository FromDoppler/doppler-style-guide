import { WidgetInfoCard } from "./Widget.Info.Card";

export default {
  title: "Components/Widget.Info.Card",
  argTypes: {
    bgColor: {
      description:
        "Background color class for the icon, must be a valid dolor in the library",
      control: { type: "select" },
      defaultValue: "dp-green",
      options: ["dp-green", "dp-yellow", "dp-red"],
    },
  },
};

const Template = ({ bgColor }) => WidgetInfoCard({ bgColor });

export const Default = Template.bind({});
Default.args = {
  bgColor: "dp-red",
};
