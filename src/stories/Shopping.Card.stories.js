import { Shopping } from "./Shopping.Card";

// More on default export:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Components/Shopping.Card",
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {},
};

// More on component templates:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = (args) => {
  return Shopping(args);
};

export const Default = Template.bind({});
Default.args = {};
