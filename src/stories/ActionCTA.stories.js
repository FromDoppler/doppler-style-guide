import { html } from "lit-html";
import { ActionCTA } from "./ActionCTA";

export default {
  title: "Components/ActionCTA",
  parameters: {
    docs: {
      description: {
        component:
          "ActionCTA displays a compact call to action with editable title, description, and icon. " +
          "The icon color uses `$dp-violet-tabs` (`#c9a9d5`) and the right arrow uses the existing `icon-arrow-next` icon.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Main text displayed next to the icon.",
    },
    description: {
      control: "text",
      description: "Supporting text displayed below the title row.",
    },
    iconClass: {
      control: "text",
      description:
        "Icon class. For example: `ms-icon icon-notification`.",
    },
  },
};

const Template = (args) => ActionCTA(args);

const commonArgs = {
  title: "Notificaciones Push",
  description:
    "Envía alertas o información relevante a los visitantes de tu Sitio Web o Tienda Online.",
  iconClass: "ms-icon icon-notification",
};

export const Default = Template.bind({});
Default.args = { ...commonArgs };
