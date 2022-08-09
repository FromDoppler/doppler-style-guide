import { html } from "lit";

export const Default = () => {
  return html`<dp-dropdown>
    <div>Option 1</div>
    <div>Option 2</div>
    <div>Option 3</div>
    <div>Option 4</div>
  </dp-dropdown>`;
};

// More on default export:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Components/Dropdown",
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {},
};

const Template = (args) => Default(args);
