import { FilterDropdown } from "./Button.FilterDropdown";
import { html, render } from "lit-html";

export default {
  title: "Components/Button.FilterDropdown",
  parameters: {
    docs: {
      description: {
        component:
          "Dropdown that displays filters aligned to the left or right.",
      },
    },
  },
  argTypes: {
    position: {
      control: { type: "select" },
      options: ["left", "right"],
      description: "Determines the dropdown alignment.",
      defaultValue: "left",
    },
    filterButtonColor: {
      control: { type: "select" },
      options: ["green", "grey", "brown"],
      description: "Color of the filter button.",
      defaultValue: "green",
    },
    filterButtonIcon: {
      control: { type: "text" },
      description: "Name of the icon displayed on the filter button.",
      defaultValue: "iconapp-funnel",
    },
    title: {
      control: { type: "text" },
      description: "Title of the dropdown filter.",
      defaultValue: "Filtro por campaña",
    },
    titleIcon: {
      control: { type: "text" },
      description:
        "Name of the icon displayed to the left of the filter title.",
      defaultValue: "iconapp-funnel",
    },
    titleIconColor: {
      control: { type: "select" },
      options: ["green", "grey", "brown"],
      description: "Color of the title icon.",
      defaultValue: "green",
    },
    leftButtonText: {
      control: { type: "text" },
      description: "Text displayed on the left button.",
      defaultValue: "Limpiar Filtros",
    },
    leftButtonColor: {
      control: { type: "select" },
      options: ["green", "grey", "brown"],
      description: "Color of the left button.",
      defaultValue: "green",
    },
    rightButtonText: {
      control: { type: "text" },
      description: "Text displayed on the right button.",
      defaultValue: "Aplicar Filtros",
    },
    rightButtonColor: {
      control: { type: "select" },
      options: ["green", "grey", "brown"],
      description: "Color of the right button",
      defaultValue: "green",
    },
  },
};

const Template = (args) => {
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.justifyContent =
    args.position === "right" ? "flex-end" : "flex-start";
  container.style.padding = "0 40px";

  render(FilterDropdown(args), container);

  return container;
};

export const Default = Template.bind({});
Default.args = {
  position: "left",
  filterButtonColor: "green",
  filterButtonIcon: "iconapp-funnel",
  title: "Filtro por campaña",
  titleIcon: "iconapp-funnel",
  titleIconColor: "green",
  leftButtonText: "Limpiar Filtros",
  leftButtonColor: "green",
  rightButtonText: "Aplicar Filtros",
  rightButtonColor: "green",
};
