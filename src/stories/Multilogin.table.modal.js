import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Inputs = ({ disabled, label, labelRequired, isError }) => {
  return html`
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
                            <button type="button">Reenviar Invitación</button>
                          </li>
                          <li role="menuitem">
                            <button type="button">Inactivar Colaborador</button>
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
                            <button type="button">Reenviar Invitación</button>
                          </li>
                          <li role="menuitem">
                            <button type="button">Inactivar Colaborador</button>
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
  `;
};
