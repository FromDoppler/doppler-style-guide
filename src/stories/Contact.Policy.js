import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Contact = ({ disabled, label, isError }) => {
  return html`
    <h3 class="m-t-30">
      Tenemos el error de formulario (Assisted text) para los inputs y al pie de
      pagina los diferentes tipos de mensajes para el usuario de forma general
    </h3>
    <p class="m-b-42">
      Todos los botones grises plenos para una acción secundaria, pasaran a ser
      blancos y con borde gris
    </p>
    <section class="dp-container">
      <div class="dp-rowflex">
        <div class="col-lg-6 col-md-12 col-sm-12 m-b-24">
          <form class="dp-contact-policy-form">
            <fieldset>
              <legend>Política de contacto</legend>
              <ul class="field-group">
                <li class="field-item">
                  <div class="dp-switch">
                    <input
                      type="checkbox"
                      id="oneCheck"
                      checked=""
                      type="switch"
                    />
                    <label for="oneCheck">
                      <span></span>
                    </label>
                  </div>
                  <label for="switch"
                    >Limitar la cantidad maxima de envios a un mismo
                    Suscriptor</label
                  >
                </li>
                <li class="field-item">
                  <div class="dp-item-block awa-form">
                    <label
                      for="name"
                      class="labelcontrol"
                      aria-disabled=${disabled}
                      data-required="false"
                    >
                      No enviar mas de
                      <input
                        type="number"
                        name="number"
                        id="correos electrónicos"
                        aria-placeholder="999"
                        .disabled=${disabled}
                        aria-invalid=${isError}
                      />
                      emails en un período de
                      <input
                        type="number"
                        name="number"
                        id="dias"
                        aria-placeholder="30"
                        .disabled=${disabled}
                        aria-invalid=${isError}
                      />
                      días
                      <!-- add class "show" message -->
                      <div class="dp-textmessage show">
                        <p>${label}</p>
                      </div>
                    </label>
                  </div>
                </li>
                <li class="field-item">
                  <p class="p-heading">
                    <strong
                      >Excluir a los Suscriptores pertenecientes a las
                      siguientes Listas</strong
                    >
                  </p>
                  <p class="m-t-12 m-b-12">
                    Todos los Suscriptores presentes en las Listas que agregues
                    a continuación quedarán fuera de la política de contacto que
                    has configurado previamente, es decir, que siempre recibirán
                    las Campañas que les envíes. Recuerda que solo puedes
                    excluir hasta 10 Listas.
                  </p>
                </li>
                <li class="field-item">
                  <ul class="dp-cloud-tags">
                    <li>
                      <span class="dp-tag dp-recently-add"
                        >Ciencias Naturales<button
                          type="button"
                          class="dp-button dp-remove-tag"
                        >
                          <i class="ms-icon icon-close"></i></button
                      ></span>
                    </li>
                    <li>
                      <span class="dp-tag"
                        >Economía<button
                          type="button"
                          class="dp-button dp-remove-tag"
                        >
                          <i class="ms-icon icon-close"></i></button
                      ></span>
                    </li>
                    <li>
                      <span class="dp-tag"
                        >Ciencias Sociales<button
                          type="button"
                          class="dp-button dp-remove-tag"
                        >
                          <i class="ms-icon icon-close"></i></button
                      ></span>
                    </li>
                    <li>
                      <span class="dp-tag"
                        >Ciencias Antro morfologícas<button
                          type="button"
                          class="dp-button dp-remove-tag"
                        >
                          <i class="ms-icon icon-close"></i></button
                      ></span>
                    </li>
                    <li>
                      <span class="dp-tag"
                        >Teoría de Conjuntos<button
                          type="button"
                          class="dp-button dp-remove-tag"
                        >
                          <i class="ms-icon icon-close"></i></button
                      ></span>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="dp-button dp-add-list"
                        id="btn-exclude-list"
                      >
                        <span>+</span> Agregar Lista
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="dp-button dp-add-list"
                        id="btn-exclude-nolist"
                      >
                        <span>+</span> No list
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="dp-button dp-add-list"
                        id="btn-error-list"
                      >
                        <span>+</span> Error list
                      </button>
                    </li>
                  </ul>
                </li>
                <li class="field-item">
                  <ul class="dp-cloud-tags dp-overlay">
                    <li>
                      <span class="dp-tag"
                        >Ciencias Naturales<button
                          type="button"
                          class="dp-button dp-remove-tag"
                          disabled
                        >
                          <i class="ms-icon icon-close"></i></button
                      ></span>
                    </li>
                    <li>
                      <span class="dp-tag"
                        >Economía<button
                          type="button"
                          class="dp-button dp-remove-tag"
                          disabled
                        >
                          <i class="ms-icon icon-close"></i></button
                      ></span>
                    </li>
                    <li>
                      <span class="dp-tag"
                        >Ciencias Sociales<button
                          type="button"
                          class="dp-button dp-remove-tag"
                          disabled
                        >
                          <i class="ms-icon icon-close"></i></button
                      ></span>
                    </li>
                    <li>
                      <span class="dp-tag"
                        >Ciencias Antro morfologícas<button
                          type="button"
                          class="dp-button dp-remove-tag"
                          disabled
                        >
                          <i class="ms-icon icon-close"></i></button
                      ></span>
                    </li>
                    <li>
                      <span class="dp-tag"
                        >Teoría de Conjuntos<button
                          type="button"
                          class="dp-button dp-remove-tag"
                          disabled
                        >
                          <i class="ms-icon icon-close"></i></button
                      ></span>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="dp-button dp-add-list"
                        disabled
                      >
                        <span>+</span> Agregar Lista
                      </button>
                    </li>
                  </ul>
                </li>
                <!-- mensaje de error -->
                <li class="field-item">
                  <div class="dp-wrap-message dp-wrap-cancel bounceIn">
                    <span class="dp-message-icon"></span>
                    <div class="dp-content-message">
                      <p>
                        Puedes configurar hasta
                        <strong>999 Emails y 30 días</strong> como máximo.
                      </p>
                    </div>
                  </div>
                </li>
                <!-- fin del mensaje -->
                <!-- mensaje de warning -->
                <li class="field-item">
                  <div class="dp-wrap-message dp-wrap-warning bounceIn">
                    <span class="dp-message-icon"></span>
                    <div class="dp-content-message">
                      <p>Ten cuidado.</p>
                    </div>
                  </div>
                </li>
                <!-- fin del mensaje -->
                <!-- mensaje de info -->
                <li class="field-item">
                  <div class="dp-wrap-message dp-wrap-info bounceIn">
                    <span class="dp-message-icon"></span>
                    <div class="dp-content-message">
                      <p>Mensaje informativo</p>
                    </div>
                  </div>
                </li>
                <!-- fin del mensaje -->
                <!-- mensaje de confirmacion -->
                <li class="field-item">
                  <div class="dp-wrap-message dp-wrap-success bounceIn">
                    <span class="dp-message-icon"></span>
                    <div class="dp-content-message">
                      <p>Cambios guardados con éxito.</p>
                    </div>
                  </div>
                </li>
                <!-- fin del mensaje -->
                <li class="field-item"><hr /></li>
                <li class="field-item">
                  <button
                    type="button"
                    class="dp-button button-medium ctaTertiary"
                  >
                    Atras
                  </button>
                  <span class="align-button m-l-24">
                    <button
                      type="button"
                      class="dp-button button-medium primary-green button--loading"
                      disabled
                    >
                      Guardar
                    </button>
                  </span>
                </li>
              </ul>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  `;
};
