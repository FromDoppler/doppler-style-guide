import { Pill } from "./Pill";

export default {
  title: "Components/Pill",
  parameters: {
    docs: {
      description: {
        component: `
💊 **Pill Component**

_Last updated: **11/11/2025** by **Ezequiel Morales**_

The \`Pill\` component is used to display small text labels (tags) or time ranges, usually accompanied by a button to close or remove them from the context.

---

### ⚙️ Main Properties

| Property | Type | Description |
|-----------|------|-------------|
| **text** | \`string\` | Text displayed inside the pill. If it’s too long, it gets truncated with ellipsis (\`...\`) unless the **expandable** mode is enabled. |
| **color** | \`"green"\` | Defines the border and background colors. It’s based on the SCSS color map \`$pill-colors\`, which makes it easy to add more variants (e.g. \`grey\`, \`brown\`, etc.). |
| **removable** | \`boolean\` | Shows or hides the close button (the ✕). If set to \`false\`, the pill becomes fixed. |
| **expandable** | \`boolean\` | When enabled, the pill **doesn’t limit its width** (it can exceed 212px) and the text **is not truncated**. When disabled, the text is shortened with ellipsis to maintain a controlled size. |

---

### 🎨 Styles and Structure

Each pill has its own border and background color, defined through the SCSS map \`$pill-colors\`:

\`\`\`scss
$pill-colors: (
  green: (
    border: colors.$dp-color-green,
    bg: colors.$dp-color-green-brightness,
  ),
  // you can add more variants here
);
\`\`\`

The generated HTML structure looks like this:

\`\`\`html
<div class="pill pill--green">
  <span class="pill-text">September 2024 - September 2025</span>
  <button class="pill-close" aria-label="Close"></button>
</div>
\`\`\`

---

### ❌ Close Button (SVG Icon)

The close icon (“x”) uses a **modified external SVG**, which doesn’t dynamically change color according to the applied style.
> If you want to use a different SVG or one that adopts the theme color, you need to **create a new SVG file and edit it**, adjusting the \`fill\` attribute to the desired value.

This ensures visual consistency with the color defined in \`.pill--green\` or any future variants.

---

### 🧩 Grouping Multiple Pills

To display multiple pills on the same line, you can use the helper class **\`.pill-container\`**, which handles proper alignment:

\`\`\`scss
.pill-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5px; // space between pills
}
\`\`\`

And the corresponding HTML:

\`\`\`html
<div class="pill-container">
  <div class="pill pill--green">...</div>
  <div class="pill pill--green">...</div>
  <div class="pill pill--green">...</div>
</div>
\`\`\`

With this class, the pills are placed **side by side** and **wrap automatically** when there’s not enough space.

---

### 🧠 Visual and Behavioral Summary

- ✅ Default width is limited to **212px**, and text is truncated.
- 🔓 If \`expandable = true\`, the text can grow freely without being truncated.
- ❌ If \`removable = false\`, the close “x” button is hidden.
- 🎨 Colors and styles come from the SCSS map \`$pill-colors\`, which you can easily extend.
- 🧱 You can group several pills inside a \`.pill-container\` to align them horizontally with consistent spacing.

---

💡 **Tip:** The component is designed for use both in lists and configuration sections, where it’s useful to display dynamic labels, ranges, or active filters.
        `,
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
