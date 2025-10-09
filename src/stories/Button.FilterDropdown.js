import $ from "jquery";
import { html, render } from "lit-html";

export const FilterDropdown = ({
  position,
  filterButtonColor,
  filterButtonIcon,
  title,
  titleIcon,
  titleIconColor,
  leftButtonText,
  leftButtonColor,
  rightButtonText,
  rightButtonColor,
} = {}) => {
  const isRight = position === "right";

  const template = html`
    <div style="position: relative;">
      <button
        type="button"
        class="dp-button button-big secondary-${filterButtonColor} button-medium button-icon"
      >
        <span class="dpicon ${filterButtonIcon}"></span>
      </button>

      <section class="dp-container" style="display: none;">
        <div class="dp-rowflex">
          <div
            class="dropdown-filter ${isRight ? "dropdown-filter--right" : ""}"
          >
            <div class="dropdown-filter-content">
              <span class="close"></span>
              <h2 class="dropdown-filter-title">
                <span
                  class="dp-color-${titleIconColor} dpicon ${titleIcon} m-r-6"
                ></span>
                ${title}
              </h2>
              <hr class="m-t-12 m-b-12" />

              <form class="form-request">
                <div class="p-b-24">
                  <p class="dropdown-filter-title-section">Periodo:</p>
                  <label for="periodo" class="dropdown-filter-label"
                    >Periodo:</label
                  >
                  <input
                    type="date"
                    id="periodo"
                    placeholder="Elige el Periodo..."
                  />
                </div>

                <hr class="m-t-12 m-b-12" />

                <div class="p-b-24">
                  <p class="dropdown-filter-title-section">Campaña:</p>

                  <div class="dropdown-filter-field">
                    <label for="nombreCampania" class="dropdown-filter-label"
                      >Nombre de Campaña:</label
                    >
                    <input
                      type="text"
                      id="nombreCampania"
                      placeholder="Ingresa nombre de campaña"
                    />
                  </div>

                  <div class="dropdown-filter-field">
                    <label for="tipoCampania" class="dropdown-filter-label"
                      >Tipo de Campaña:</label
                    >
                    <select id="tipoCampania" class="dropdown-filter-select">
                      <option value="" disabled selected>Todas</option>
                      <option value="clasica">Clásica</option>
                      <option value="social">Social</option>
                      <option value="test-ab">Test A/B</option>
                    </select>
                  </div>

                  <div class="dropdown-filter-field">
                    <label for="emailRemitente" class="dropdown-filter-label"
                      >Email Remitente:</label
                    >
                    <input
                      type="email"
                      id="emailRemitente"
                      placeholder="Ingresa Email"
                    />
                  </div>
                </div>

                <div class="container-buttons">
                  <button
                    type="button"
                    name="cancel"
                    class="dp-button button-medium secondary-${leftButtonColor}"
                  >
                    ${leftButtonText}
                  </button>
                  <button
                    type="submit"
                    name="submit"
                    class="dp-button button-medium primary-${rightButtonColor}"
                  >
                    ${rightButtonText}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;

  const container = document.createElement("div");
  render(template, container);

  const $btn = $(container).find("button.dp-button.button-icon");
  const $dropdown = $(container).find("section.dp-container");
  const $close = $dropdown.find(".close");
  const $form = $dropdown.find("form.form-request");

  const toggleDropdown = () => $dropdown.toggle();

  $btn.on("click", toggleDropdown);
  $close.on("click", toggleDropdown);

  $form.on("submit", (event) => {
    event.preventDefault();
  });

  return container;
};
