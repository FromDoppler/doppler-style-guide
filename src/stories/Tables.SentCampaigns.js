import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Tables = ({ type }) => {
  return type == "Campaigns"
    ? html`<section class="dp-container">
        <div class="dp-rowflex dp-content-list">
          <table class="dp-c-table dp-table-sent-campaigns">
            <thead>
              <tr>
                <th>
                  <p>CAMPAÑAS</p>
                </th>
                <th>
                  <p>ENVIADOS vs ENTEGADOS</p>
                </th>
                <th>
                  <p>RENDIMIENTO DE CAMPAÑA</p>
                </th>
                <th>
                  <p>CLICS</p>
                </th>
                <th>
                  <p>DESUSCRIPTOS</p>
                </th>
                <th>
                  <p>QUEJAS</p>
                </th>
                <th>
                  <p>ACCIONES</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="long-column">
                  <div class="dp-rowflex">
                    <div class="dp-tooltip-container col-sm-2">
                      <span class="icon-svg--sm">
                        <span
                          class="icon icon-preview-eye"
                          aria-hidden="true"
                        ></span>
                        <div class="dp-tooltip-chart">
                          <img
                            src="https://cdn.fromdoppler.com/doppler-ui-library/thumbnail-preview.png"
                            alt=""
                          />
                        </div>
                      </span>
                    </div>
                    <div class="col-sm-10">
                      <a href="#">Promo 20% Off Cyber Mo...</a>
                      <p><strong>Envio: </strong>2312/45/56</p>
                      <p>
                        <strong>Remitente: </strong>fgonzalez@fromdoppler.com
                      </p>
                      <p><strong>Tipo: </strong>clasica</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="p-t-12">
                    <strong>93%</strong>
                    <p>1909 | 1776</p>
                    <strong>Delivery Rate</strong>
                  </div>
                </td>
                <td class="long-column">
                  <div class="dp-rowflex p-t-12">
                    <div class="col-sm-4">
                      <strong class="dp-color-green">34%</strong>
                      <p>611</p>
                      <strong>Abiertos</strong>
                    </div>
                    <div class="col-sm-4">
                      <strong class="dp-color-blue-widget">65%</strong>
                      <p>1165</p>
                      <strong>No abiertos</strong>
                    </div>
                    <div class="col-sm-4">
                      <strong class="dp-color-orange-carousel">6.9%</strong>
                      <p>133</p>
                      <strong>Rebotes</strong>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="p-t-12">
                    <strong class="dp-color-green">38.9%</strong>
                    <p>238</p>
                    <strong>CTOR</strong>
                  </div>
                </td>
                <td>
                  <div class="p-t-12">
                    <strong class="dp-color-red">0.6%</strong>
                    <p>10</p>
                  </div>
                </td>
                <td>
                  <div class="p-t-12">
                    <strong class="dp-color-red">0%</strong>
                    <p>0</p>
                  </div>
                </td>
                <td>
                  <div class="dp-icons-group m-t-30">
                    <a href=""
                      ><span
                        class="dpicon icon-action iconapp-infographic-chart"
                      ></span
                    ></a>
                    <a href=""
                      ><span class="dpicon icon-action iconapp-copy-file"></span
                    ></a>
                    <a href=""
                      ><span class="dpicon icon-action iconapp-trash-bin"></span
                    ></a>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="long-column">
                  <div class="dp-rowflex">
                    <div class="dp-tooltip-container col-sm-2">
                      <span class="icon-svg--sm">
                        <span
                          class="icon icon-preview-eye"
                          aria-hidden="true"
                        ></span>
                        <div class="dp-tooltip-chart">
                          <img
                            src="https://cdn.fromdoppler.com/doppler-ui-library/thumbnail-preview.png"
                            alt=""
                          />
                        </div>
                      </span>
                    </div>
                    <div class="col-sm-10">
                      <a href="#">Promo 20% Off Cyber Mo...</a>
                      <p><strong>Envio: </strong>2312/45/56</p>
                      <p>
                        <strong>Remitente: </strong>fgonzalez@fromdoppler.com
                      </p>
                      <p><strong>Tipo: </strong>clasica</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="p-t-12">
                    <strong>93%</strong>
                    <p>1909 | 1776</p>
                    <strong>Delivery Rate</strong>
                  </div>
                </td>
                <td class="long-column">
                  <div class="dp-rowflex p-t-12">
                    <div class="col-sm-4">
                      <strong class="dp-color-green">34%</strong>
                      <p>611</p>
                      <strong>Abiertos</strong>
                    </div>
                    <div class="col-sm-4">
                      <strong class="dp-color-blue-widget">65%</strong>
                      <p>1165</p>
                      <strong>No abiertos</strong>
                    </div>
                    <div class="col-sm-4">
                      <strong class="dp-color-orange-carousel">6.9%</strong>
                      <p>133</p>
                      <strong>Rebotes</strong>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="p-t-12">
                    <strong class="dp-color-green">38.9%</strong>
                    <p>238</p>
                    <strong>CTOR</strong>
                  </div>
                </td>
                <td>
                  <div class="p-t-12">
                    <strong class="dp-color-red">0.6%</strong>
                    <p>10</p>
                  </div>
                </td>
                <td>
                  <div class="p-t-12">
                    <strong class="dp-color-red">0%</strong>
                    <p>0</p>
                  </div>
                </td>
                <td>
                  <div class="dp-icons-group m-t-30">
                    <a href=""
                      ><span
                        class="dpicon icon-action iconapp-infographic-chart"
                      ></span
                    ></a>
                    <a href=""
                      ><span class="dpicon icon-action iconapp-copy-file"></span
                    ></a>
                    <a href=""
                      ><span class="dpicon icon-action iconapp-trash-bin"></span
                    ></a>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="long-column">
                  <div class="dp-rowflex">
                    <div class="dp-tooltip-container col-sm-2">
                      <span class="icon-svg--sm">
                        <span
                          class="icon icon-preview-eye"
                          aria-hidden="true"
                        ></span>
                        <div class="dp-tooltip-chart">
                          <img
                            src="https://cdn.fromdoppler.com/doppler-ui-library/thumbnail-preview.png"
                            alt=""
                          />
                        </div>
                      </span>
                    </div>
                    <div class="col-sm-10">
                      <a href="#">Promo 20% Off Cyber Mo...</a>
                      <p><strong>Envio: </strong>2312/45/56</p>
                      <p>
                        <strong>Remitente: </strong>fgonzalez@fromdoppler.com
                      </p>
                      <p><strong>Tipo: </strong>clasica</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="p-t-12">
                    <strong>93%</strong>
                    <p>1909 | 1776</p>
                    <strong>Delivery Rate</strong>
                  </div>
                </td>
                <td class="long-column">
                  <div class="dp-rowflex p-t-12">
                    <div class="col-sm-4">
                      <strong class="dp-color-green">34%</strong>
                      <p>611</p>
                      <strong>Abiertos</strong>
                    </div>
                    <div class="col-sm-4">
                      <strong class="dp-color-blue-widget">65%</strong>
                      <p>1165</p>
                      <strong>No abiertos</strong>
                    </div>
                    <div class="col-sm-4">
                      <strong class="dp-color-orange-carousel">6.9%</strong>
                      <p>133</p>
                      <strong>Rebotes</strong>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="p-t-12">
                    <strong class="dp-color-green">38.9%</strong>
                    <p>238</p>
                    <strong>CTOR</strong>
                  </div>
                </td>
                <td>
                  <div class="p-t-12">
                    <strong class="dp-color-red">0.6%</strong>
                    <p>10</p>
                  </div>
                </td>
                <td>
                  <div class="p-t-12">
                    <strong class="dp-color-red">0%</strong>
                    <p>0</p>
                  </div>
                </td>
                <td>
                  <div class="dp-icons-group m-t-30">
                    <a href=""
                      ><span
                        class="dpicon icon-action iconapp-infographic-chart"
                      ></span
                    ></a>
                    <a href=""
                      ><span class="dpicon icon-action iconapp-copy-file"></span
                    ></a>
                    <a href=""
                      ><span class="dpicon icon-action iconapp-trash-bin"></span
                    ></a>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="12">
                  <nav class="dp-pagination">
                    <ul>
                      <li>
                        <button
                          type="button"
                          class="ms-icon icon-arrow-prev"
                        ></button>
                      </li>
                      <li><a href="#">1</a></li>
                      <li>
                        <button
                          class="dp-pag-point"
                          title="volver 5 paginas"
                        ></button>
                      </li>
                      <li><a href="#">13</a></li>
                      <li><a href="#">14</a></li>
                      <li>
                        <span class="dp-active-page" aria-current="page"
                          >15</span
                        >
                      </li>
                      <li><a href="#">16</a></li>
                      <li><a href="#">17</a></li>
                      <li>
                        <button
                          class="dp-pag-point"
                          title="avanzar 5 paginas"
                        ></button>
                      </li>
                      <li><a href="#">158</a></li>
                      <li>
                        <button
                          type="button"
                          class="ms-icon icon-arrow-next"
                        ></button>
                      </li>
                    </ul>
                  </nav>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>`
    : type == "Month"
      ? html` <section class="dp-container">
          <div class="dp-rowflex dp-content-list">
            <table class="dp-c-table dp-table-sent-campaigns">
              <thead>
                <tr>
                  <th>
                    <p>AÑO</p>
                  </th>
                  <th>
                    <p>MES</p>
                  </th>
                  <th>
                    <p>CANT. CAMPAÑAS</p>
                  </th>
                  <th>
                    <p>ENVIADOS vs ENTEGADOS</p>
                  </th>
                  <th>
                    <p>RENDIMIENTO DE CAMPAÑA</p>
                  </th>
                  <th>
                    <p>CLICS</p>
                  </th>
                  <th>
                    <p>DESUSCRIPTOS</p>
                  </th>
                  <th>
                    <p>QUEJAS</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>2024</p>
                  </td>
                  <td>
                    <p>Septiembre</p>
                  </td>
                  <td>
                    <p>15</p>
                  </td>
                  <td>
                    <div class="p-t-12">
                      <strong>93%</strong>
                      <p>1909 | 1776</p>
                      <strong>Delivery Rate</strong>
                    </div>
                  </td>
                  <td class="long-column">
                    <div class="dp-rowflex p-t-12">
                      <div class="col-sm-4">
                        <strong class="dp-color-green">34%</strong>
                        <p>611</p>
                        <strong>Abiertos</strong>
                      </div>
                      <div class="col-sm-4">
                        <strong class="dp-color-blue-widget">65%</strong>
                        <p>1165</p>
                        <strong>No abiertos</strong>
                      </div>
                      <div class="col-sm-4">
                        <strong class="dp-color-orange-carousel">6.9%</strong>
                        <p>133</p>
                        <strong>Rebotes</strong>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="p-t-12">
                      <strong class="dp-color-green">38.9%</strong>
                      <p>238</p>
                      <strong>CTOR</strong>
                    </div>
                  </td>
                  <td>
                    <div class="p-t-12">
                      <strong class="dp-color-red">0.6%</strong>
                      <p>10</p>
                    </div>
                  </td>
                  <td>
                    <div class="p-t-12">
                      <strong class="dp-color-red">0%</strong>
                      <p>0</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>2024</p>
                  </td>
                  <td>
                    <p>Agosto</p>
                  </td>
                  <td>
                    <p>15</p>
                  </td>
                  <td>
                    <div class="p-t-12">
                      <strong>93%</strong>
                      <p>1909 | 1776</p>
                      <strong>Delivery Rate</strong>
                    </div>
                  </td>
                  <td>
                    <div class="dp-rowflex p-t-12">
                      <div class="col-sm-4">
                        <strong class="dp-color-green">34%</strong>
                        <p>611</p>
                        <strong>Abiertos</strong>
                      </div>
                      <div class="col-sm-4">
                        <strong class="dp-color-blue-widget">65%</strong>
                        <p>1165</p>
                        <strong>No abiertos</strong>
                      </div>
                      <div class="col-sm-4">
                        <strong class="dp-color-orange-carousel">6.9%</strong>
                        <p>133</p>
                        <strong>Rebotes</strong>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="p-t-12">
                      <strong class="dp-color-green">38.9%</strong>
                      <p>238</p>
                      <strong>CTOR</strong>
                    </div>
                  </td>
                  <td>
                    <div class="p-t-12">
                      <strong class="dp-color-red">0.6%</strong>
                      <p>10</p>
                    </div>
                  </td>
                  <td>
                    <div class="p-t-12">
                      <strong class="dp-color-red">0%</strong>
                      <p>0</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>2024</p>
                  </td>
                  <td>
                    <p>Julio</p>
                  </td>
                  <td>
                    <p>15</p>
                  </td>
                  <td>
                    <div class="p-t-12">
                      <strong>93%</strong>
                      <p>1909 | 1776</p>
                      <strong>Delivery Rate</strong>
                    </div>
                  </td>
                  <td>
                    <div class="dp-rowflex p-t-12">
                      <div class="col-sm-4">
                        <strong class="dp-color-green">34%</strong>
                        <p>611</p>
                        <strong>Abiertos</strong>
                      </div>
                      <div class="col-sm-4">
                        <strong class="dp-color-blue-widget">65%</strong>
                        <p>1165</p>
                        <strong>No abiertos</strong>
                      </div>
                      <div class="col-sm-4">
                        <strong class="dp-color-orange-carousel">6.9%</strong>
                        <p>133</p>
                        <strong>Rebotes</strong>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="p-t-12">
                      <strong class="dp-color-green">38.9%</strong>
                      <p>238</p>
                      <strong>CTOR</strong>
                    </div>
                  </td>
                  <td>
                    <div class="p-t-12">
                      <strong class="dp-color-red">0.6%</strong>
                      <p>10</p>
                    </div>
                  </td>
                  <td>
                    <div class="p-t-12">
                      <strong class="dp-color-red">0%</strong>
                      <p>0</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>2024</p>
                  </td>
                  <td>
                    <p>Junio</p>
                  </td>
                  <td>
                    <p>15</p>
                  </td>
                  <td>
                    <div class="p-t-12">
                      <strong>93%</strong>
                      <p>1909 | 1776</p>
                      <strong>Delivery Rate</strong>
                    </div>
                  </td>
                  <td>
                    <div class="dp-rowflex p-t-12">
                      <div class="col-sm-4">
                        <strong class="dp-color-green">34%</strong>
                        <p>611</p>
                        <strong>Abiertos</strong>
                      </div>
                      <div class="col-sm-4">
                        <strong class="dp-color-blue-widget">65%</strong>
                        <p>1165</p>
                        <strong>No abiertos</strong>
                      </div>
                      <div class="col-sm-4">
                        <strong class="dp-color-orange-carousel">6.9%</strong>
                        <p>133</p>
                        <strong>Rebotes</strong>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="p-t-12">
                      <strong class="dp-color-green">38.9%</strong>
                      <p>238</p>
                      <strong>CTOR</strong>
                    </div>
                  </td>
                  <td>
                    <div class="p-t-12">
                      <strong class="dp-color-red">0.6%</strong>
                      <p>10</p>
                    </div>
                  </td>
                  <td>
                    <div class="p-t-12">
                      <strong class="dp-color-red">0%</strong>
                      <p>0</p>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="12">
                    <nav class="dp-pagination">
                      <ul>
                        <li>
                          <button
                            type="button"
                            class="ms-icon icon-arrow-prev"
                          ></button>
                        </li>
                        <li><a href="#">1</a></li>
                        <li>
                          <button
                            class="dp-pag-point"
                            title="volver 5 paginas"
                          ></button>
                        </li>
                        <li><a href="#">13</a></li>
                        <li><a href="#">14</a></li>
                        <li>
                          <span class="dp-active-page" aria-current="page"
                            >15</span
                          >
                        </li>
                        <li><a href="#">16</a></li>
                        <li><a href="#">17</a></li>
                        <li>
                          <button
                            class="dp-pag-point"
                            title="avanzar 5 paginas"
                          ></button>
                        </li>
                        <li><a href="#">158</a></li>
                        <li>
                          <button
                            type="button"
                            class="ms-icon icon-arrow-next"
                          ></button>
                        </li>
                      </ul>
                    </nav>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>`
      : type == "No campaigns"
        ? html`<div class="dp-container">
            <div class="dp-box-shadow dp-wrapper-message dp-colflex">
              <span
                class="dpicon iconapp-message-alert icon-svg--lg m-t-102"
              ></span>
              <p class="m-t-12">
                Aún no hay información para mostrar. Empieza creando tu primera
                Campaña.
              </p>
              <button
                type="button"
                class="dp-button button-big secondary-green button-small m-t-12"
              >
                Creala Ahora
              </button>
              <a href="#" class="m-t-12 m-b-102"
                >¿Necesitas ayuda? [Cómo crear mi primera Campaña]
                <span class="dpicon iconapp-right-upward-arrow"></span
              ></a>
            </div>
          </div>`
        : html`<div class="dp-container">
            <div class="dp-box-shadow dp-wrapper-message dp-colflex">
              <span
                class="dpicon iconapp-message-alert icon-svg--lg m-t-102"
              ></span>
              <p class="m-t-12">
                No se han encontrado datos para los filtros seleccionados,
              </p>
              <p class="m-b-102">
                por favor reintente seleccionando otros parametros de búsqueda.
              </p>
            </div>
          </div>`;
};
