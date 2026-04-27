import { html } from "lit-html";

export const Tabs = ({}) => {
  return html`<div class="dp-library">
    <div class="dp-container">
      <div class="dp-rowflex">
        <nav class="tabs-wrapper">
          <ul class="tabs-nav" data-tab-active="1">
            <li class="tab--item">
              <a href="#" class="tab--link active"
                >Comportamiento hist&oacute;rico del suscriptor</a
              >
            </li>
            <li class="tab--item">
              <a href="#" class="tab--link">Historial de permisos GDPR</a>
            </li>
          </ul>
          <div class="tabs-bg"></div>
        </nav>

        <section class="tab--container col-sm-12">
          <article class="tab--content active">
            <p>Contenido de ejemplo para el primer tab.</p>
          </article>
          <article class="tab--content">
            <p>Contenido de ejemplo para el segundo tab.</p>
          </article>
        </section>
      </div>
    </div>
  </div>`;
};
