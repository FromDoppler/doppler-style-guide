import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const WidgetTable = ({}) => {
  return html`
    <section class="dp-widget-table-container">
      <h4>Estado de widgets en el sitio</h4>
      <table class="widget-table">
        <thead>
          <tr>
            <th>NOMBRE</th>
            <th>TIPO DE WIDGET</th>
            <th>ESTADO</th>
            <th>VISTAS</th>
            <th>ACCIÓN</th>
            <th>CTR</th>
            <th>DÍAS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span
                class="icon dpicon iconapp-campaign"
                style="background-color: #b58fc1"
              ></span>
              Promo 20% OFF
            </td>
            <td>Pop up Promocional</td>
            <td><span class="status active"></span> Activo</td>
            <td>224</td>
            <td>30</td>
            <td>25%</td>
            <td>15 D</td>
          </tr>
          <tr>
            <td>
              <span
                class="icon dpicon iconapp-campaign"
                style="background-color: #b58fc1"
              ></span>
              Black Friday
            </td>
            <td>Pop up Promocional</td>
            <td><span class="status active"></span> Activo</td>
            <td>125</td>
            <td>5</td>
            <td>25%</td>
            <td>15 D</td>
          </tr>
          <tr>
            <td>
              <span
                class="icon dpicon iconapp-selected-candidate"
                style="background-color: #fbb224"
              ></span>
              Suscripción Newsletter
            </td>
            <td>Pop up Promocional</td>
            <td><span class="status active"></span> Activo</td>
            <td>115</td>
            <td>17</td>
            <td>25%</td>
            <td>15 D</td>
          </tr>
          <tr>
            <td>
              <span
                class="icon dpicon iconapp-shopping-app"
                style="background-color: #65c192"
              ></span>
              Los más vendidos
            </td>
            <td>Productos Populares</td>
            <td><span class="status inactive"></span> Inactivo</td>
            <td>60</td>
            <td>2</td>
            <td>25%</td>
            <td>15 D</td>
          </tr>
        </tbody>
      </table>
    </section>
  `;
};
