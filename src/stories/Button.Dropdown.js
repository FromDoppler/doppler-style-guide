import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Inputs = ({ disabled }) => {
  return html`
    <div class="awa-form">
      <div class="dp-container">
        <div class="dp-rowflex">
          <div class="col-sm-3">
            <div class="dp-button-dropdown-wrap dp-wrap-big">
              <div class="dp-button-box">
                <button
                  type="button"
                  class="dp-button button-big dp-button-dropdown"
                  aria-controls=""
                  .disabled=${disabled}
                >
                  <span class="dp-dropdown-arrow"></span>
                  Salir del Editor
                </button>
                <div class="dp-content-menu">
                  <ul class="dp-list-dropdown" id="">
                    <li role="menuitem">
                      <button type="button">Inicio</button>
                    </li>
                    <li role="menuitem">
                      <button type="button">Campañas</button>
                    </li>
                    <li role="menuitem">
                      <button type="button">Listas</button>
                    </li>
                    <li role="menuitem">
                      <a href="#"> Panel de Control </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="dp-button-dropdown-wrap dp-wrap-madium">
              <div class="dp-button-box">
                <button
                  type="button"
                  class="dp-button button-medium dp-button-dropdown"
                  aria-controls=""
                  .disabled=${disabled}
                >
                  <span class="dp-dropdown-arrow"></span>
                  Salir del Editor
                </button>
                <div class="dp-content-menu">
                  <ul class="dp-list-dropdown" id="">
                    <li role="menuitem">
                      <button type="button">Inicio</button>
                    </li>
                    <li role="menuitem">
                      <button type="button">Campañas</button>
                    </li>
                    <li role="menuitem">
                      <button type="button">Listas</button>
                    </li>
                    <li role="menuitem">
                      <a href="#"> Panel de Control </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="dp-button-dropdown-wrap dp-wrap-small">
              <div class="dp-button-box">
                <button
                  type="button"
                  class="dp-button button-small dp-button-dropdown"
                  aria-controls=""
                  .disabled=${disabled}
                >
                  <span class="dp-dropdown-arrow"></span>
                  Salir del Editor
                </button>
                <div class="dp-content-menu">
                  <ul class="dp-list-dropdown" id="">
                    <li role="menuitem">
                      <button type="button">Inicio</button>
                    </li>
                    <li role="menuitem">
                      <button type="button">Campañas</button>
                    </li>
                    <li role="menuitem">
                      <button type="button">Listas</button>
                    </li>
                    <li role="menuitem">
                      <a href="#"> Panel de Control </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};
