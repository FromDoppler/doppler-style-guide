import { TutorialCard } from "./TutorialCard";

export default {
  title: "Components/TutorialCard",
  parameters: {
    docs: {
      description: {
        component:
          "**TutorialCard Component**\n\n" +
          "The `TutorialCard` component is used to highlight a tutorial or educational resource " +
          "inside a card layout with image, category pill, title, and author.\n\n" +
          "---\n\n" +
          "### Main Properties\n\n" +
          "| Property | Type | Description |\n" +
          "|----------|------|-------------|\n" +
          "| **pillText** | `string` | Text displayed inside the top pill. " +
          "It is rendered using the shared `Pill` component with the blue variant. |\n" +
          "| **title** | `string` | Main tutorial title shown below the pill. |\n" +
          "| **author** | `string` | Author name displayed with the `Por ...` prefix. |\n" +
          "| **showPlayIcon** | `boolean` | Shows or hides the centered play icon. " +
          "When disabled, the dark overlay on the image is also removed. |\n\n" +
          "---\n\n" +
          "### Styles and Structure\n\n" +
          "The component uses a fixed visual structure with a hardcoded image asset " +
          "and reusable style-guide primitives:\n\n" +
          "- `Pill` for the category label\n" +
          "- custom card styles for spacing, media, and typography\n" +
          "- a CSS-built play icon rendered only when `showPlayIcon = true`\n\n" +
          "The generated HTML structure looks like this:\n\n" +
          "```html\n" +
          '<article class="dp-tutorial-card">\n' +
          '  <div class="dp-tutorial-card__media">\n' +
          '    <img class="dp-tutorial-card__image" src="..." alt="Tutorial title" />\n' +
          '    <span class="dp-tutorial-card__play" aria-hidden="true"></span>\n' +
          "  </div>\n" +
          '  <div class="dp-tutorial-card__body">\n' +
          '    <div class="pill pill--blue">...</div>\n' +
          '    <h3 class="dp-tutorial-card__title">Tutorial title</h3>\n' +
          '    <p class="dp-tutorial-card__author">Por Author Name</p>\n' +
          "  </div>\n" +
          "</article>\n" +
          "```\n\n" +
          "---\n\n" +
          "### Play Icon and Overlay\n\n" +
          "The play icon is not an SVG or image asset. " +
          "It is built with CSS using a circular element and a triangle created with borders.\n\n" +
          "When `showPlayIcon` is disabled, the component also adds the modifier class " +
          "`.dp-tutorial-card__media--without-overlay` to remove the dark overlay from the image.\n\n" +
          "---\n\n" +
          "### Visual and Behavioral Summary\n\n" +
          "- Uses a hardcoded image asset, ready to be replaced later if needed.\n" +
          "- Reuses the shared `Pill` component with the `blue` color variant.\n" +
          "- Keeps the API intentionally small: only texts and play visibility " +
          "are configurable.\n" +
          "- Includes responsive adjustments for smaller screens.\n",
      },
    },
  },
  argTypes: {
    pillText: {
      control: "text",
      description: "Text inside the pill",
      defaultValue: "Email Automation",
    },
    title: {
      control: "text",
      description: "Tutorial title",
      defaultValue: "Cómo crear un Automation de Pago Confirmado",
    },
    author: {
      control: "text",
      description: "Tutorial author",
      defaultValue: "Virginia Garay",
    },
    showPlayIcon: {
      control: "boolean",
      description: "Show or hide the play icon over the image",
      defaultValue: true,
    },
  },
};

const Template = (args) => TutorialCard(args);

export const Default = Template.bind({});
Default.args = {
  pillText: "Email Automation",
  title: "Cómo crear un Automation de Pago Confirmado",
  author: "Virginia Garay",
  showPlayIcon: true,
};
