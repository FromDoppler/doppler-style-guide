import { Tables } from "./Tables.SentCampaigns.js";

// More on default export:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Components/Tables.SentCampaigns",
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["Campaigns", "Month", "No campaigns", "No Data"],
    },
  },
};

// More on component templates:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = (args) => Tables(args);

export const Default = Template.bind({});
