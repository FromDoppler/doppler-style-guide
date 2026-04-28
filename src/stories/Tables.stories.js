import { Tables } from "./Tables.js";

export default {
  title: "Components/Tables",
  argTypes: {
    type: {
      table: {
        disable: true,
      },
      control: false,
    },
  },
};

const Template = (args) => Tables(args);

export const Details = Template.bind({});
Details.args = {
  type: "Campaigns",
};

export const NoData = Template.bind({});
NoData.args = {
  type: "No campaigns",
};
