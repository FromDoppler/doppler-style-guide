import { html } from "lit-html";

export const Default = () => {
  return html`
    <dp-dropdown>
      <dp-dropbdown-button>
        <button>Click me!!</button>
      </dp-dropbdown-button>
      <dp-dropdown-content>
        <a>Nombre</a>
        <a>Apellido</a>
        <a>Cumpleaños</a>
        <a>Email</a>
        <a>Nombre</a>
        <a>Apellido</a>
      </dp-dropdown-content>
    </dp-dropdown>
  `;
};

// More on default export:
// https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Components/Dropdown",
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {},
};

const Template = (args) => Default(args);
