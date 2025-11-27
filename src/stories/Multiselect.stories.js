import { Multiselect } from "./Multiselect";

export default {
  title: "Components/Multiselect",
  parameters: {
    docs: {
      description: {
        component:
          "🧩 **Multiselect Component**\n\n" +
          "The `Multiselect` displays a custom multi-select dropdown using Doppler styles. It combines a\n" +
          "hidden native `<select multiple>` (for accessibility and form usage) with a fully styled UI\n" +
          "that includes a header, checkboxes, and a scrollable dropdown.\n\n" +
          "---\n\n" +
          "### 🎯 Purpose\n\n" +
          "This component is framework-agnostic; its HTML/CSS work in any application.\n" +
          "In Storybook, jQuery is used only to simulate interactions; real apps must\n" +
          "implement dropdown behavior manually.\n\n" +
          "---\n\n" +
          "### ⚙️ Structure\n\n" +
          "The component contains two parts:\n\n" +
          "1. **Hidden `<select multiple>`**\n" +
          "   - Preserves accessibility.\n" +
          "   - Supports real forms.\n" +
          "   - Syncs selected values.\n\n" +
          "2. **Custom UI (`dp-select-multiple`)**\n" +
          "   - Displays selected labels.\n" +
          "   - Shows a styled dropdown when open.\n" +
          "   - Contains custom checkboxes and text labels.\n\n" +
          "---\n\n" +
          "### 🎨 CSS Behavior\n\n" +
          "Dropdown visibility depends on the `.active` class in `.dp-select-multiple`. When active,\n" +
          "the inner `.select-options` becomes visible. Without `.active`, the dropdown stays closed.\n\n" +
          "```scss\n" +
          ".dp-select-multiple.active .select-options {\n" +
          "  display: block;\n" +
          "}\n" +
          "```\n\n" +
          "Apps using this component **must toggle `.active` manually** to open and close the dropdown.\n\n" +
          "---\n\n" +
          "### 📝 Example Markup\n\n" +
          "```html\n" +
          '<div class="awa-form">\n' +
          '  <select multiple class="native-multiselect" style="display:none;">\n' +
          '    <option value="label1">Label 1</option>\n' +
          "    <!-- ... -->\n" +
          "  </select>\n\n" +
          '  <div class="dp-select dp-select-multiple dp-label-checkbox--darkyellow">\n' +
          '    <div class="select-header">\n' +
          '      <span class="selected-text">Select labels</span>\n' +
          '      <span class="dropdown-arrow"></span>\n' +
          "    </div>\n\n" +
          '    <div class="select-options">\n' +
          '      <label class="option">\n' +
          '        <input type="checkbox" value="label1" />\n' +
          '        <span class="checkmark"></span>\n' +
          '        <span class="label-text">Label 1</span>\n' +
          "      </label>\n" +
          "      <!-- More options... -->\n" +
          "    </div>\n" +
          "  </div>\n" +
          "</div>\n" +
          "```\n\n" +
          "---\n\n" +
          "### 🧠 Behavioral Summary\n\n" +
          "- The component does **not** include logic outside Storybook.\n" +
          "- `.active` opens and closes the dropdown.\n" +
          "- `.checkmark` styles the visual checkbox.\n" +
          "- `.selected-text` displays selected labels or the placeholder.\n" +
          "- Apps consuming this UI must handle events and state.\n\n" +
          "---\n\n" +
          "### 🔗 Why a Hidden Native Select?\n\n" +
          "Using a hidden `<select multiple>` ensures:\n" +
          "- Accessibility support.\n" +
          "- Form-friendly selected values.\n" +
          "- Consistent integration across technologies.\n\n" +
          "---\n\n" +
          "### 📦 Implementation Tips\n\n" +
          "- Toggle `.active` on header click.\n" +
          "- Sync checkbox selection with app state.\n" +
          "- Update `.selected-text` with selected items.\n" +
          "- Maintain the hidden select for accessibility.\n\n" +
          "---\n\n",
      },
    },
  },
};

export const Default = () => Multiselect();
