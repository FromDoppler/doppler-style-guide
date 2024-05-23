import { Inputs } from "./Multilogin.table.modal";

// More on default export:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Components/Multilogin.table.modal",
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {},
};

// More on component templates:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = (args) => {
  return Inputs(args);
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  isError: false,
  labelRequired: false,
  label: "Name",
};
