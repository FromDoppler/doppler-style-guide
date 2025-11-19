import { html } from "lit-html";
import $ from "jquery";

/**
 * Multiselect custom
 */
export const Multiselect = () => {
  setTimeout(() => initSelectMultiple(), 0);

  return html`
    <div class="awa-form" style="width:350px;margin-top: 40px;">
      <select
        multiple
        class="native-multiselect"
        style="display:none;"
        data-label="Selecciona las etiquetas"
      >
        <option value="etiqueta1">Etiqueta 1</option>
        <option value="etiqueta2">Etiqueta 2</option>
        <option value="etiqueta3">Etiqueta 3</option>
        <option value="etiqueta4">Etiqueta 4</option>
        <option value="etiqueta5">Etiqueta 5</option>
        <option value="etiqueta6">Etiqueta 6</option>
        <option value="etiqueta7">Etiqueta 7</option>
        <option value="etiqueta8">Etiqueta 8</option>
      </select>

      <div class="dp-select dp-select-multiple">
        <div class="select-header">
          <span class="selected-text">Selecciona las etiquetas</span>
          <span class="dropdown-arrow"></span>
        </div>

        <div class="select-options">
          ${[1, 2, 3, 4, 5, 6, 7, 8].map(
            (i) => html`
              <label class="option">
                <input type="checkbox" value="etiqueta${i}" />
                <span class="checkmark"></span>
                <span class="label-text">Etiqueta ${i}</span>
              </label>
            `,
          )}
        </div>
      </div>
    </div>
  `;
};

const initSelectMultiple = () => {
  $(document).ready(function () {
    const $component = $(".dp-select-multiple");
    const $header = $component.find(".select-header");
    const $checkboxes = $component.find("input[type='checkbox']");
    const $selectedText = $component.find(".selected-text");
    const $nativeSelect = $(".native-multiselect");

    $header.on("click", (e) => {
      e.stopPropagation();
      $component.toggleClass("active");
    });

    $component.find(".select-options").on("click", (e) => e.stopPropagation());

    $(document).on("click", () => $component.removeClass("active"));

    $checkboxes.on("change", function () {
      const value = $(this).val();
      const isChecked = $(this).is(":checked");

      $nativeSelect
        .find(`option[value="${value}"]`)
        .prop("selected", isChecked);

      updateSelectedText();
    });

    function updateSelectedText() {
      const selectedOptions = $nativeSelect
        .find("option:selected")
        .map(function () {
          return $(this).text();
        })
        .get();

      if (selectedOptions.length > 0) {
        $selectedText.text(selectedOptions.join(", "));
      } else {
        $selectedText.text($nativeSelect.data("label"));
      }
    }
  });
};
