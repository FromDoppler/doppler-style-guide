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
        data-label="Select labels"
      >
        <option value="label1">Label 1</option>
        <option value="label2">Label 2</option>
        <option value="label3">Label 3</option>
        <option value="label4">Label 4</option>
        <option value="label5">Label 5</option>
        <option value="label6">Label 6</option>
        <option value="label7">Label 7</option>
        <option value="label8">Label 8</option>
        <option value="label9">Label 9</option>
        <option value="label10">Label 10</option>
      </select>

      <div class="dp-select dp-select-multiple">
        <div class="select-header">
          <span class="selected-text">Select labels</span>
          <span class="dropdown-arrow"></span>
        </div>

        <div class="select-options">
          ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
            (i) => html`
              <label class="option">
                <div class="awa-form">
                  <label
                    class="dp-label-checkbox dp-label-checkbox--darkyellow"
                  >
                    <input type="checkbox" value="label${i}" />
                    <span class="label-text">Label ${i}</span>
                  </label>
                </div>
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
