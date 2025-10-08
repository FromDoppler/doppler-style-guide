import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Tooltips = ({}) => {
  return html` <div class="dp-library">
    <div class="dp-container">
      <div class="dp-rowflex">
        <section class="col-sm-12 dp-box-shadow">
          <div class="dpsg-content-wrap">
            <article class="dpsg-content">
              <h3>Tooltip</h3>
              <p>
                Podemos utilizar las clases dp-tooltip-top, dp-tooltip-right,
                dp-tooltip-bottom, dp-tooltip-left para posicionar el tooltip
                donde lo necesitemos.
              </p>
              <hr class="dpsg-break" />

              <div class="dp-container">
                <div class="dp-rowflex"></div>
              </div>

              <div class="wrapper-tooltip">
                <div class="dp-box">
                  <p>Tooltip top</p>
                  <div class="dp-tooltip-container">
                    <span class="ms-icon icon-tip-icon"></span>
                    <div class="dp-tooltip-top">
                      <span
                        >Lorem ipsum dolor sit amet.
                        <a href="#">tips para seguir</a></span
                      >
                    </div>
                  </div>

                  <div class="dp-tooltip-container">
                    <span class="ms-icon icon-info-icon"></span>

                    <div class="dp-tooltip-top">
                      <span
                        >¿Realizas envíos frecuentes? Escoge un Plan basado en
                        la cantidad de Suscriptores que posees, sin límite de
                        envíos. Si pagas 3, 6 o 12 meses por adelantado,
                        ¡ahorras hasta un 25%!.</span
                      >
                    </div>
                  </div>
                </div>

                <div class="dp-box">
                  <p>
                    Tooltip right
                    <span class="ms-icon icon-tip-icon dp-tooltip-right">
                      <span class="tooltiptext"
                        >Lorem ipsum dolor sit amet.
                        <a href="#">tips para seguir</a>
                      </span>
                    </span>
                  </p>
                </div>

                <div class="dp-box">
                  <p>
                    Tooltip bottom
                    <span class="ms-icon icon-tip-icon dp-tooltip-bottom">
                      <span class="tooltiptext"
                        >Lorem ipsum dolor sit amet.
                        <a href="#">tips para seguir</a></span
                      >
                    </span>
                  </p>
                </div>

                <div class="dp-box">
                  <p>
                    Tooltip left
                    <span class="ms-icon icon-tip-icon dp-tooltip-left">
                      <span class="tooltiptext">
                        Lorem ipsum dolor sit amet.
                        <a href="#">tips para seguir</a>
                      </span>
                    </span>
                  </p>
                </div>
              </div>

              <h3>Tooltip II</h3>
              <p>
                Este tooltip se utliza en el gráfico de Visitas por Dias,
                semanas y horas de la pagina de reportes.
              </p>
              <hr class="dpsg-break" />
              <div class="wrapper-tooltip">
                <div class="dp-tooltip-container">
                  <span class="dpsg-code"
                    >Hover!
                    <div class="dp-tooltip-chart">
                      <img
                        src="https://cdn.fromdoppler.com/doppler-ui-library/thumbnail-preview.png"
                        alt=""
                      />
                    </div>
                  </span>
                </div>
                <div class="dp-tooltip-container">
                  <span class="dpsg-code">
                    Hover!
                    <div class="dp-tooltip-chart">
                      <small>Jueves 16</small>
                      <span>Usuarios con email: 2</span>
                      <span>Usuarios sin email: 754</span>
                    </div>
                  </span>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  </div>`;
};
