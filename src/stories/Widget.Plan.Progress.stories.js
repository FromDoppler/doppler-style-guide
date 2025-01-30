import { WidgetPlanProgress } from "./Widget.Plan.Progress";

export default {
  title: "Components/Widget.Plan.Progress",
  argTypes: {
    percentage: {
      description: "Percentaje to show in the progress bar",
      control: { type: "number" },
      defaultValue: 50,
    },
  },
};

const Template = (args) => {
  return WidgetPlanProgress(args);
};

export const Default = Template.bind({});
Default.args = {
  percentage: 50,
};
