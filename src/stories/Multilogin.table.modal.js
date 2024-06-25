import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Inputs = ({ disabled, label, labelRequired, isError }) => {
  return html`
    <section class="dp-container">
      <div class="dp-rowflex">
        <header class="hero-banner m-t-54">
          <div class="dp-container">
            <div class="dp-rowflex">
              <div class="col-sm-12 col-md-12 col-lg-12">
                <nav class="dp-breadcrumb">
                  <ul>
                    <li>
                      <a href="#">Panel de control</a>
                    </li>
                    <li>Configuracion ded perfiles</li>
                  </ul>
                </nav>
                <h2>Configuración de perfiles</h2>
              </div>
              <div class="col-sm-7">
                <p>
                  Desde esta sección podrás asignar colaboradores que te ayuden
                  a gestionar tu cuenta y asignarle accesos acordes a su rol.
                </p>
              </div>
              <div class="col-sm-5 text-align--right">
                <button
                  id="btn-new-collaborator"
                  type="button"
                  class="dp-button button-medium primary-green"
                >
                  New collaborator
                </button>
              </div>
            </div>
          </div>
        </header>
        <div class="col-sm-12 m-t-24 m-b-36">
          <h3 class="m-t-24 m-b-30">COLABORADORES DE TU CUENTA</h3>
          <div class="dp-table-responsive">
            <table
              class="dp-table-multilogin"
              aria-label="Resultado multilogin"
              summary="Resultado de multilogin"
            >
              <thead>
                <tr>
                  <th aria-label="Email" scope="col">
                    <a href="#">Email </a>
                  </th>
                  <th aria-label="Nombre" scope="col">
                    <a href="#">Nombre </a>
                  </th>
                  <th aria-label="Apellido" scope="col">
                    <a href="#">Apellido </a>
                  </th>
                  <th aria-label="Fecha de invitacion" scope="col">
                    <a href="#">Fecha de invitacion</a>
                  </th>
                  <th aria-label="Estado" scope="col">
                    <a href="#">Estado</a>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td aria-label="Email">
                    <a href="#" role="link" rel="noopener" target="_blank"
                      >fcoronel@makingsense.com</a
                    >
                  </td>
                  <td aria-label="Nombre"><span>Federico</span></td>
                  <td aria-label="Apellido"><span>Coronel</span></td>
                  <td aria-label="Estado de Segmentos">
                    <div class="dp-icon-wrapper">
                      <span>Segmentos 1# (segmentos)</span>
                    </div>
                  </td>
                  <td aria-label="estado">
                    <div class="dp-flex-wrap">
                      <span>Pendiente</span>
                      <div class="dp-button-dropdown-wrap dp-wrap-medium">
                        <div class="dp-button-box">
                          <button
                            type="button"
                            class="dp-button button-medium dp-button-dropdown dp-three-points-vertical"
                            aria-controls="dp-exit-editor"
                          ></button>
                          <div class="dp-content-menu" style="display: none">
                            <ul class="dp-list-dropdown" id="dropdown">
                              <li role="menuitem">
                                <button type="button">Editar permisos</button>
                              </li>
                              <li role="menuitem">
                                <button type="button">
                                  Reenviar Invitación
                                </button>
                              </li>
                              <li role="menuitem">
                                <button type="button">
                                  Inactivar Colaborador
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td aria-label="Email">
                    <a href="#" role="link" rel="noopener" target="_blank"
                      >fcoronel@makingsense.com</a
                    >
                  </td>
                  <td aria-label="Nombre"><span>Federico</span></td>
                  <td aria-label="Apellido"><span>Coronel</span></td>
                  <td aria-label="Estado de Segmentos">
                    <div class="dp-icon-wrapper">
                      <span>Segmentos 1# (segmentos)</span>
                    </div>
                  </td>
                  <td aria-label="estado">
                    <div class="dp-flex-wrap">
                      <span>Activo</span>
                      <div class="dp-button-dropdown-wrap dp-wrap-medium">
                        <div class="dp-button-box">
                          <button
                            type="button"
                            class="dp-button button-medium dp-button-dropdown dp-three-points-vertical"
                            aria-controls="dp-exit-editor"
                          ></button>
                          <div class="dp-content-menu" style="display: none">
                            <ul class="dp-list-dropdown" id="dropdown">
                              <li role="menuitem">
                                <button type="button">Editar permisos</button>
                              </li>
                              <li role="menuitem">
                                <button type="button">
                                  Reenviar Invitación
                                </button>
                              </li>
                              <li role="menuitem">
                                <button type="button">
                                  Inactivar Colaborador
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-sm-12 m-t-30 m-b-30">
          <ul class="col-sm-8 list-modal">
            <li>
              <button
                id="btn-all-accounts"
                type="button"
                class="dp-button button-medium primary-green"
              >
                All accounts
              </button>
            </li>
            <li>
              <button
                id="btn-permissions"
                type="button"
                class="dp-button button-medium primary-green"
              >
                Add permissions
              </button>
            </li>
            <li>
              <button
                id="btn-successful-collaborator"
                type="button"
                class="dp-button button-medium primary-green"
              >
                Successful collaborator
              </button>
            </li>
          </ul>

          <div class="modal" id="modal-all-accounts">
            <div class="modal-content--medium">
              <span class="close"></span>
              <h2 class="modal-title">Todas las cuentas</h2>
              <p>
                Estas son todas tus cuentas, selecciona con cual quieres
                trabajar el día de hoy.
              </p>
              <form action="#" class="awa-form">
                <fieldset class="">
                  <ul class="field-group">
                    <li class="field-item">
                      <label
                        for="search"
                        class="labelcontrol"
                        aria-disabled="false"
                        >Busca cuentas y roles:
                        <div class="dp-wrap-search">
                          <button
                            class="dp-button button-medium dp-button--search"
                          >
                            <span
                              class="ms-icon icon-search"
                              aria-hidden="true"
                            ></span>
                          </button>
                          <input
                            type="search"
                            id="search"
                            placeholder="Busqueda de imagenes"
                            aria-invalid="false"
                          />
                          <!-- <div class="assistance-wrap">
                    <span>Assistive text</span>
                  </div> -->
                        </div>
                      </label>
                    </li>
                  </ul>
                </fieldset>
              </form>
            </div>
          </div>
          <div class="modal" id="modal-new-collaborator">
            <div class="modal-content--medium">
              <span class="close"></span>
              <h2 class="modal-title">Añadir nuevo colaborador</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                ultricies tristique nulla. Donec est felis, gravida in leo
                vitae, bibendum tincidunt risus. Duis a convallis arcu.
              </p>
              <form action="#" class="awa-form">
                <legend>Añadir nuevo colaborador</legend>
                <fieldset>
                  <ul class="field-group">
                    <li class="field-item">
                      <label
                        for="email"
                        class="labelcontrol"
                        aria-disabled="false"
                        data-required="true"
                        >Email
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Your Email"
                          aria-required="true"
                          aria-invalid="false"
                          aria-placeholder="Your Email"
                        />
                        <!-- <div class="assistance-wrap">
                  <span>Assistive text</span>
                </div> -->
                      </label>
                    </li>
                    <li class="field-item">
                      <ul class="field-group">
                        <li class="field-item field-item--50">
                          <label
                            for="name"
                            class="labelcontrol"
                            aria-disabled="false"
                            data-required="true"
                            >Nombre
                            <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Your Name"
                              aria-required="true"
                              aria-invalid="false"
                              aria-placeholder="Your Name"
                            />
                            <!-- <div class="assistance-wrap">
                      <span>Assistive text</span>
                    </div> -->
                          </label>
                        </li>
                        <li class="field-item field-item--50">
                          <label
                            for="name"
                            class="labelcontrol"
                            aria-disabled="false"
                            data-required="true"
                            >Apellido
                            <input
                              type="text"
                              id="Apellido"
                              name="Apellido"
                              placeholder="Apellido"
                              aria-required="true"
                              aria-invalid="false"
                              aria-placeholder="Your Name"
                            />
                            <!-- <div class="assistance-wrap">
                      <span>Assistive text</span>
                    </div> -->
                          </label>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul class="dp-group-buttons">
                    <li>
                      <!-- <button type="button" class="dp-button button-medium ctaTertiary">
                Volver
              </button> -->
                    </li>
                    <li>
                      <button
                        type="button"
                        class="dp-button button-medium primary-green"
                      >
                        Siguiente
                      </button>
                    </li>
                  </ul>
                </fieldset>
              </form>
            </div>
          </div>
          <div class="modal" id="modal-permissions">
            <div class="modal-content--medium">
              <span class="close"></span>
              <h2 class="modal-title">
                Seleccione los permisos que desea asignar:
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                ultricies tristique nulla. Donec est felis, gravida in leo
                vitae.
              </p>

              <form action="#" class="awa-form">
                <legend>Añadir nuevo colaborador</legend>
                <fieldset>
                  <ul class="field-group">
                    <li class="field-item">
                      <ul class="field-group">
                        <li class="field-item field-item--50">
                          <label class="dp-label-checkbox">
                            <span>Campañas</span>
                            <input type="checkbox" aria-checked="true" />
                          </label>
                        </li>
                        <li class="field-item field-item--50">
                          <label class="dp-label-checkbox">
                            <span>Campañas</span>
                            <input type="checkbox" checked />
                          </label>
                        </li>
                      </ul>
                    </li>
                    <li class="field-item">
                      <ul class="field-group">
                        <li class="field-item field-item--50">
                          <label class="dp-label-checkbox">
                            <span>Campañas</span>
                            <input type="checkbox" />
                          </label>
                        </li>
                        <li class="field-item field-item--50">
                          <label class="dp-label-checkbox">
                            <span>Campañas</span>
                            <input type="checkbox" />
                          </label>
                        </li>
                      </ul>
                    </li>
                    <li class="field-item">
                      <ul class="field-group">
                        <li class="field-item field-item--50">
                          <label class="dp-label-checkbox">
                            <span>Campañas</span>
                            <input type="checkbox" />
                          </label>
                        </li>
                        <li class="field-item field-item--50">
                          <label class="dp-label-checkbox">
                            <span>Campañas</span>
                            <input type="checkbox" />
                          </label>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul class="dp-group-buttons">
                    <li>
                      <button
                        type="button"
                        class="dp-button button-medium ctaTertiary"
                      >
                        Volver
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        class="dp-button button-medium primary-green"
                      >
                        Siguiente
                      </button>
                    </li>
                  </ul>
                </fieldset>
              </form>
            </div>
          </div>
          <div class="modal" id="modal-successful-collaborator">
            <div class="modal-content--medium">
              <span class="close"></span>
              <h2 class="modal-title">
                Has añadido a tu Colaborador con éxito
              </h2>
              <p>
                Tu Colaborador recibirá la invitación en su casilla de correo
                electrónico. Una vez aceptada la invitación y creada la su
                contraseña, podrá comenzar a gestionar tu cuenta de acuerdo con
                los permisos que le has otorgado
              </p>
              <ul class="dp-group-buttons">
                <li>
                  <button
                    type="button"
                    class="dp-button button-medium ctaTertiary"
                  >
                    Volver
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="dp-button button-medium primary-green"
                  >
                    Siguiente
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};
