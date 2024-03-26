import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Inputs = ({ disabled, label }) => {
  return html`
    <section class="dp-container">
      <div class="dp-rowflex">
        <div class="col-lg-8 col-md-12">
          <div class="dp-wrapper-form-plans">
            <form class="dp-forms-plans">
              <fieldset>
                <legend></legend>
                <ul class="field-group">
                  <!-- utilizar la clase dp-validate en el li para mostrar mensajes de validacion -->
                  <li class="field-item">
                    <label for="email">Lorem ipsum:</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Lorem ipsum"
                    />
                    <div class="wrapper-errors dp-message dp-error-form">
                      <p>¡Ouch! Este campo está vacío</p>
                    </div>
                  </li>
                  <li class="field-item">
                    <ul class="field-group">
                      <!-- utilizar la clase dp-validate en el li para mostrar mensajes de validacion -->
                      <li class="field-item field-item--50">
                        <label for="name">Lorem ipsum:</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Lorem ipsum"
                        />
                        <div class="wrapper-errors dp-message dp-error-form">
                          <p>¡Ouch! Este campo está vacío</p>
                        </div>
                      </li>
                      <!-- utilizar la clase dp-validate en el li para mostrar mensajes de validacion -->
                      <li class="field-item field-item--50">
                        <div class="dp-wrapper-bd">
                          <label for="subject">*${label}:</label>
                          <div class="dp-with-buttons">
                            <input
                              type="text"
                              name="lastname"
                              id="subject"
                              placeholder=""
                              .disabled="${disabled}"
                            />
                            <div class="dp-button-group">
                              <div class="dp-bd-box">
                                <button
                                  type="button"
                                  class="dp-button button-medium dp-button-bd"
                                  aria-controls="dp-options-cf"
                                >
                                  <i class="ms-icon icon-brackets"></i>
                                </button>
                                <div
                                  class="dp-content-bd"
                                  style="display: none;"
                                >
                                  <ul class="dp-list-cfield" id="dp-options-cf">
                                    <li role="none">
                                      <a role="menuitem">Nombre</a>
                                    </li>
                                    <li role="none">
                                      <a role="menuitem">Apellido</a>
                                    </li>
                                    <li role="none">
                                      <a role="menuitem">Cumpleaños</a>
                                    </li>
                                    <li role="none">
                                      <a role="menuitem">Email</a>
                                    </li>
                                    <li role="none">
                                      <a role="menuitem">Nombre</a>
                                    </li>
                                    <li role="none">
                                      <a role="menuitem">Apellido</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="dp-bd-box">
                                <button
                                  type="button"
                                  class="dp-button button-medium dp-button-bd"
                                  aria-controls="dp-menu-emojis"
                                >
                                  <img src="img/emoji.png" />
                                </button>
                                <div
                                  class="dp-content-bd"
                                  id="dp-menu-emojis"
                                  style="display: none;"
                                >
                                  <img src="img/img-emojis.gif" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="wrapper-errors dp-message dp-error-form">
                            <p>¡Ouch! Este campo está vacío</p>
                          </div>

                          <button
                            type="button"
                            class="dp-show-tips"
                            data-text-show="Mostrar consejos "
                            data-text-hide="Ocultar consejos "
                          >
                            <span class="dp-show-text">Ocultar consejos </span
                            ><span class="ms-icon icon-close"></span>
                          </button>
                        </div>
                      </li>
                      <li
                        class="field-item field-item--100 dp-advice"
                        style="display: list-item;"
                      >
                        <div class="dp-suggestion-bd-wrapper">
                          <div class="dp-container">
                            <div class="dp-rowflex">
                              <div class="col-lg-6 col-md-6">
                                <div class="dp-more-effective">
                                  <h4>
                                    Más efectivos del mes
                                    <span>(por porcentaje de apertura)</span>
                                  </h4>
                                  <ul class="dp-tips-list">
                                    <li>
                                      <p>
                                        Hola [[[First_Name]]] Aquí va tu cupón
                                        de 50%! :)
                                        <span class="dp-opening">43,6%</span>
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        Por qué no aprovechas el verano
                                        [[[first_name]]]?
                                        <span class="dp-opening">35%</span>
                                      </p>
                                    </li>
                                    <li>
                                      <p>
                                        Vuela con nosotros y disfruta!
                                        <span class="dp-opening">27,5%</span>
                                      </p>
                                    </li>
                                    <li>
                                      <span class="dp-tip"
                                        >Si envías mayor cantidad de Campañas
                                        podrás visualizar hasta 5 asuntos de los
                                        más efectivos.</span
                                      >
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div class="col-lg-6 col-md-6">
                                <div class="bg-suggestion">
                                  <h4>
                                    Consejos
                                    <span>(basados en buenas prácticas)</span>
                                  </h4>
                                  <ul class="dp-tips-list">
                                    <li class="advice-enabled">
                                      <span
                                        ><strong
                                          >Asuntos atractivos, pero
                                          breves.</strong
                                        ></span
                                      >
                                      <p>
                                        Te recomendamos que utilices entre 10 y
                                        60 caracteres
                                      </p>
                                    </li>
                                    <li class="advice-warning">
                                      <span
                                        ><strong
                                          >¡Los emojis son geniales!</strong
                                        ></span
                                      >
                                      <p>
                                        Te recomendamos no utilizar más de de 1
                                        por asunto.
                                      </p>
                                    </li>
                                    <li class="advice-disabled">
                                      <span
                                        ><strong
                                          >Incluye campos
                                          personalizados.</strong
                                        ></span
                                      >
                                      <p>
                                        Por ejemplo: [[[first_name]]]. Ayúdate
                                        con nuestra acción [ ]
                                      </p>
                                    </li>
                                    <li class="advice-warning">
                                      <span
                                        ><strong
                                          >Limita tus signos de
                                          puntuación.</strong
                                        ></span
                                      >
                                      <p>
                                        Te recomendamos no utilizar más de 3 por
                                        asunto.
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-lg-12 col-md-12">
                                <div class="dp-footer-panel">
                                  <span
                                    >¿Quieres saber más? Consulta nuestro
                                    <a href="#" target="_blank">HELP</a></span
                                  >
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </fieldset>
            </form>
          </div>
        </div>
        <div class="col-lg-3 col-sm-12"></div>
      </div>
    </section>
  `;
};
