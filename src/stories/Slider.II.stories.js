import { Slider } from "./Slider.II";

// More on default export:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Components/Slider.II",
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {},
};

// More on component templates:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = (args) => {
  return Slider(args);
};

export const Default = Template.bind({});
Default.args = {
  /*   disabled: false,
  checked: false,
  isError: false,
  label: "Checkbox default",
  errorMessage: "¡Ouch! Este checkbox no esta tildado", */
};
