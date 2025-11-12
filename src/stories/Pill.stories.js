import { Pill } from "./Pill";

export default {
  title: "Components/Pill",
  parameters: {
    docs: {
      description: {
        component:
          "💊 **Pill Component**\n\n" +
          "The `Pill` component is used to display small text labels (tags) or time ranges, usually " +
          "accompanied by a button to close or remove them from the context.\n\n" +
          "---\n\n" +
          "### ⚙️ Main Properties\n\n" +
          "| Property | Type | Description |\n" +
          "|-----------|------|-------------|\n" +
          "| **text** | `string` | Text displayed inside the pill. If it’s too long, it gets truncated" +
          " with ellipsis (`...`) unless the **expandable** mode is enabled. |\n" +
          '| **color** | `"green"` | Defines border and background colors. It’s based on the SCSS color' +
          " map `$pill-colors`, which makes it easy to add more variants (e.g. `grey`, `brown`, etc.). |\n" +
          "| **removable** | `boolean` | Shows or hides the close button (the ✕). If set to `false`, " +
          "the pill becomes fixed. |\n| **expandable** | `boolean` | When enabled, " +
          "the pill **doesn’t limit its width** (it can exceed 212px) " +
          "and the text **is not truncated**. When disabled, the text is shortened with" +
          " ellipsis to maintain a controlled size. |\n\n" +
          "---\n\n" +
          "### 🎨 Styles and Structure\n\n" +
          "Each pill has its own border and background color, defined through the SCSS " +
          "map `$pill-colors`:\n\n```scss\n" +
          "$pill-colors: (\n" +
          "  green: (\n" +
          "    border: colors.$dp-color-green,\n" +
          "    bg: colors.$dp-color-green-brightness,\n" +
          "  ),\n" +
          "  // you can add more variants here\n" +
          ");\n" +
          "```\n\n" +
          "The generated HTML structure looks like this:\n\n" +
          "```html\n" +
          '<div class="pill pill--green">\n' +
          '  <span class="pill-text">Septiembre 2025 - Septiembre 2025</span>\n' +
          '  <button class="pill-close" aria-label="Remove">\n' +
          '    <i class="icon-cancel-icon"></i>\n' +
          "  </button>\n" +
          "</div>\n" +
          "```\n\n" +
          "---\n\n" +
          "### ❌ Close Icon (Inline SVG)\n\n" +
          "The close icon is now rendered using an **inline SVG** through the `<i>` element.\n\n" +
          "This allows the SVG to **inherit the color** from its parent pill, adapting automatically " +
          "to the current color variant (e.g. `.pill--green`).\n\n" +
          "---\n\n" +
          "### 🧩 Grouping Multiple Pills\n\n" +
          "To display multiple pills on the same line, you can use the helper class " +
          "**`.pill-container`**, which handles proper alignment:\n\n" +
          "```scss\n" +
          ".pill-container {\n" +
          "  display: flex;\n" +
          "  flex-wrap: wrap;\n" +
          "  gap: 0.5px; // space between pills\n" +
          "}\n" +
          "```\n\n" +
          "And the corresponding HTML:\n\n" +
          "```html\n" +
          '<div class="pill-container">\n' +
          '  <div class="pill pill--green">...</div>\n' +
          '  <div class="pill pill--green">...</div>\n' +
          '  <div class="pill pill--green">...</div>\n' +
          "</div>\n" +
          "```\n\n" +
          "With this class, the pills are placed **side by side** and **wrap automatically** when " +
          "there’s not enough space.\n\n" +
          "---\n\n" +
          "### 🧠 Visual and Behavioral Summary\n\n" +
          "- ✅ Default width is limited to **212px**, and text is truncated.\n" +
          "- 🔓 If `expandable = true`, the text can grow freely without being truncated.\n" +
          "- ❌ If `removable = false`, the close “x” button is hidden.\n" +
          "- 🎨 Colors and styles come from the SCSS map `$pill-colors`, which you can easily extend.\n" +
          "- 🧱 You can group several pills inside a `.pill-container` to align them horizontally " +
          "with consistent spacing.\n\n" +
          "---\n\n" +
          "💡 **Tip:** The component is designed for use both in lists and configuration" +
          " sections, where it’s useful to display dynamic labels, ranges, or active filters.\n",
      },
    },
  },
  argTypes: {
    text: {
      control: "text",
      description: "Text inside the pill",
      defaultValue: "Junio 2024 - Septiembre 2024",
    },
    removable: {
      control: "boolean",
      defaultValue: true,
      description: "Show or hide the close button",
    },
    expandable: {
      control: "boolean",
      defaultValue: false,
      description:
        "Allows the text to grow without showing ellipsis (…) when it exceeds 212px width.",
    },
    color: {
      control: { type: "select" },
      options: ["green"],
      defaultValue: "green",
      description: "Defines the border and background color of the pill.",
    },
  },
};

const Template = (args) => Pill(args);

const commonArgs = {
  text: "Septiembre 2024 - Septiembre 2025",
  removable: true,
  expandable: false,
  color: "green",
};

export const Green = Template.bind({});
Green.args = { ...commonArgs };

export const WithoutClose = Template.bind({});
WithoutClose.args = {
  ...commonArgs,
  removable: false,
};

export const Expandable = Template.bind({});
Expandable.args = {
  ...commonArgs,
  expandable: true,
};
