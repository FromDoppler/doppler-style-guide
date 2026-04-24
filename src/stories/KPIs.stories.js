import { KPIs, defaultKpiItems, kpiColorOptions } from "./KPIs";

const colorOptions = Object.keys(kpiColorOptions);

export default {
  title: "Components/KPIs",
  argTypes: {
    items: {
      control: { type: "object" },
      description:
        "KPI cards to render. Each item supports icon, value and label.",
    },
    iconColor: {
      control: { type: "select" },
      description: "Icon color from the documented style guide palette.",
      options: colorOptions,
    },
    textColor: {
      control: { type: "select" },
      description: "Text color from the documented style guide palette.",
      options: colorOptions,
    },
    fontFamily: {
      control: { type: "select" },
      description: "Font family for KPI values and labels.",
      options: ["default", "Arial", "Helvetica", "Roboto", "Georgia"],
    },
    fontWeight: {
      control: { type: "select" },
      description: "Font weight for KPI values and labels.",
      options: ["default", "400", "500", "600", "700"],
    },
    fontStyle: {
      control: { type: "select" },
      description: "Font style for KPI values and labels.",
      options: ["default", "italic"],
    },
  },
};

const Template = (args) => KPIs(args);

export const Default = Template.bind({});
Default.args = {
  items: defaultKpiItems,
  iconColor: "purple",
  textColor: "default",
  fontFamily: "default",
  fontWeight: "default",
  fontStyle: "default",
};
