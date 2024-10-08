import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Myplans = ({ disabled }) => {
  return html`
    <section class="dp-library">
      <header class="hero-banner">
        <div class="dp-container">
          <div class="dp-rowflex">
            <div class="col-sm-12 col-md-12 col-lg-12">
              <h2 class="dp-first-order-title">
                Mi Plan <span class="dpicon iconapp-checklist"></span>
              </h2>
            </div>
            <div class="col-sm-7">
              <p>
                Lorem ipsum dolor sit amet consectetur. Ac eleifend diam
                lobortis montes eget proin purus. Faucibus viverra suspendisse
                molestie viverra.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div class="dp-container">
        <div class="dp-rowflex">
          <nav class="tabs-wrapper">
            <ul class="tabs-nav" data-tab-active="1">
              <li class="tab--item">
                <a href="#" class="tab--link">Detalle de suscripción</a>
              </li>
              <li class="tab--item">
                <a href="#" class="tab--link">Add- ons</a>
              </li>
              <li class="tab--item">
                <a href="#" class="tab--link">Método de Pago</a>
              </li>
              <li class="tab--item">
                <a href="#" class="tab--link">Historial de Facturación</a>
              </li>
              <li class="tab--item">
                <a href="#" class="tab--link active">Modals</a>
              </li>
            </ul>
            <!-- nav -->
            <div class="tabs-bg"></div>
          </nav>
          <div class="tab--container active col-sm-12">
            <article class="tab--content">
              <div class="dp-container col-p-l-0 col-p-r-0">
                <div class="dp-rowflex">
                  <div class="col-lg-8 col-md-12 m-b-24">
                    <div class="dp-box-shadow m-b-24">
                      <article class="dp-wrapper-plan">
                        <header>
                          <div class="dp-title-plan">
                            <h3 class="dp-second-order-title">
                              Plan de email marketing
                              <span class="dpicon iconapp-email-alert"></span>
                            </h3>
                            <p>Plan por Contactos</p>
                          </div>
                          <div class="dp-buttons--plan">
                            <button
                              type="button"
                              class="dp-button button-medium ctaTertiary dp-w-100 m-b-12"
                            >
                              Cambiar de plan
                            </button>
                            <button
                              type="button"
                              class="dp-button button-medium dp-w-100 btn-cancel"
                            >
                              Cancelar suscripción
                            </button>
                          </div>
                        </header>
                        <ul class="dp-item--plan">
                          <li>
                            <p><strong>5.000 Contactos</strong></p>
                            <p>4.000/5.000 Contactos disponible</p>
                          </li>
                          <li>
                            <p><strong>Envíos ilimitados</strong></p>
                          </li>
                          <li>
                            <p><strong>Facturación</strong></p>
                            <p>Trimestral</p>
                          </li>
                        </ul>

                        <div class="dp-functionalities">
                          <p><strong>Funcionalidades</strong></p>
                          <div class="dp-func--items">
                            <ul class="col-md-6">
                              <li>
                                Campañas de Email clásicas, sociales y Test A/B.
                              </li>
                              <li>
                                Formularios de Suscripción Clásicos y Pop-up.
                              </li>
                              <li>Flujos Automatizados.</li>
                            </ul>
                            <ul class="col-md-6">
                              <li>Notificaciones Push.</li>
                              <li>Campañas de SMS.</li>
                            </ul>
                          </div>
                        </div>
                        <footer>
                          <a href="#"
                            ><strong>Ver todas las funcionalidades</strong></a
                          >
                        </footer>
                      </article>
                    </div>
                    <div class="dp-box-shadow m-b-24">
                      <article class="dp-wrapper-plan">
                        <header>
                          <div class="dp-title-plan">
                            <h3 class="dp-second-order-title">
                              Plan de conversaciones
                              <span class="dpicon iconapp-chatting"></span>
                            </h3>
                          </div>
                          <div class="dp-buttons--plan">
                            <button
                              type="button"
                              class="dp-button button-medium ctaTertiary dp-w-100 m-b-12"
                            >
                              Cambiar de plan
                            </button>
                          </div>
                        </header>
                        <ul class="dp-item--plan">
                          <li>
                            <p><strong>500 Conversaciones</strong></p>
                            <p>400/500 Conversaciones disponible</p>
                          </li>
                        </ul>

                        <div class="dp-functionalities">
                          <p><strong>Funcionalidades</strong></p>
                          <div class="dp-func--items">
                            <ul class="col-md-6">
                              <li>Chat en Sitio Web</li>
                              <li>Chat en Facebook Messenger</li>
                              <li>Chat en Instagram</li>
                            </ul>
                            <ul class="col-md-6">
                              <li>Chat en WhatsApp Business API</li>
                              <li>
                                Envio de mensajes en WhatsApp Business API
                              </li>
                              <li>Generador de Leads</li>
                            </ul>
                          </div>
                        </div>
                        <footer>
                          <a href="#"
                            ><strong>Ver todas las funcionalidades</strong></a
                          >
                        </footer>
                      </article>
                    </div>
                    <div class="dp-box-shadow m-b-24">
                      <article class="dp-wrapper-plan">
                        <header>
                          <div class="dp-title-plan">
                            <h3 class="dp-second-order-title">
                              Pack de Landing pages
                              <span class="dpicon iconapp-landing-page"></span>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet consectetur. Ac
                              eleifend diam lobortis
                            </p>
                          </div>
                          <div class="dp-buttons--plan">
                            <button
                              type="button"
                              class="dp-button button-medium ctaTertiary dp-w-100 m-b-12"
                            >
                              Ver otros Packs
                            </button>
                          </div>
                        </header>
                        <ul class="dp-item--plan">
                          <li>
                            <p><strong>Pack 5 Landing pages</strong></p>
                          </li>
                          <li>
                            <p><strong>Pack 25 Landing pages </strong></p>
                          </li>
                        </ul>

                        <div class="dp-functionalities">
                          <p><strong>Funcionalidades</strong></p>
                          <div class="dp-func--items">
                            <ul class="col-md-6">
                              <li>
                                Lorem ipsum dolor sit amet, consectetur elit.
                              </li>
                              <li>
                                Lorem ipsum dolor sit amet, consectetur elit.
                              </li>
                              <li>
                                Lorem ipsum dolor sit amet, consectetur elit.
                              </li>
                            </ul>
                            <ul class="col-md-6">
                              <li>
                                Lorem ipsum dolor sit amet, consectetur elit.
                              </li>
                              <li>
                                Lorem ipsum dolor sit amet, consectetur elit.
                              </li>
                              <li>
                                Lorem ipsum dolor sit amet, consectetur elit.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <footer>
                          <a href="#"
                            ><strong>Ver todas las funcionalidades</strong></a
                          >
                        </footer>
                      </article>
                    </div>
                    <div class="dp-box-shadow m-b-24">
                      <article class="dp-wrapper-plan">
                        <header>
                          <div class="dp-title-plan">
                            <h3 class="dp-second-order-title">
                              Envío y automatización de SMS
                              <span
                                class="dpicon iconapp-mobile-messaging"
                              ></span>
                            </h3>
                          </div>
                          <div class="dp-buttons--plan">
                            <button
                              type="button"
                              class="dp-button button-medium ctaTertiary dp-w-100 m-b-12"
                            >
                              Cambiar de Plan
                            </button>
                          </div>
                        </header>
                        <ul class="dp-item--plan">
                          <li>
                            <p><strong>1.500 SMS</strong></p>
                            <p>500/1.500 SMS disponibles</p>
                          </li>
                        </ul>

                        <div class="dp-functionalities">
                          <p><strong>Funcionalidades</strong></p>
                          <div class="dp-func--items">
                            <ul class="col-md-6">
                              <li>Chat en Sitio Web</li>
                              <li>Chat en Facebook Messenger</li>
                              <li>Chat en Instagram</li>
                            </ul>
                            <ul class="col-md-6">
                              <li>Chat en WhatsApp Business API</li>
                              <li>
                                Envio de mensajes en WhatsApp Business API
                              </li>
                              <li>Generador de Leads.</li>
                            </ul>
                          </div>
                        </div>
                        <footer>
                          <a href="#"
                            ><strong>Ver todas las funcionalidades</strong></a
                          >
                        </footer>
                      </article>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-12">
                    <div class="dp-box-shadow m-b-24">
                      <div class="dp-card-grey">
                        <h4>ASESORIA Y ACOMPAÑAMIENTO ESTRATEICO</h4>
                        <h2>
                          Te ayudaremos a alcanzar los objetivos en tus campañas
                        </h2>
                        <p>
                          Revisaremos juntos cada aspecto de tu estrategia
                          actual y te ayudaremos a diseñar el plan de acción
                          ideal para alcanzar tus objetivos.
                        </p>
                        <button
                          type="button"
                          class="dp-button button-medium primary-green dp-w-100"
                        >
                          Solicitar consultoría
                        </button>
                      </div>
                    </div>
                    <div class="dp-box-shadow">
                      <div class="dp-card-grey"></div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article class="tab--content">
              <div class="dp-container col-p-l-0 col-p-r-0">
                <div class="dp-rowflex">
                  <div class="col-lg-8 col-md-12 m-b-24">
                    <div class="dp-box-shadow m-b-24">
                      <section class="dp-addons-wrapper">
                        <header>
                          <h3 class="dp-second-order-title">
                            Acondicionamiento de Listas
                            <span class="dpicon iconapp-checklist"></span>
                          </h3>
                        </header>
                        <article class="dp-container">
                          <div class="dp-rowflex dp-content-addons">
                            <div class="col-sm-6">
                              <p>
                                Depuramos tus bases de datos para que puedas
                                enviar campañas con listas de contactos reales y
                                actuales, generen beneficios a tu negocio.
                              </p>
                            </div>
                            <div class="col-sm-3">
                              <span class="dp-legend-price"
                                >A partir de 2.499 contactos</span
                              >
                              <h2>US$0,008*</h2>
                              <span class="dp-disclaimer"
                                >*Precio por contacto</span
                              >
                            </div>
                            <div class="col-sm-3"></div>
                          </div>
                        </article>
                        <hr />
                        <footer class="dp-footer-addons">
                          <a href="#" class="dp-more">Mas informacion</a>
                          <button
                            type="button"
                            class="dp-button button-medium secondary-green"
                          >
                            Comprar Ahora
                          </button>
                        </footer>
                      </section>
                    </div>
                    <div class="dp-box-shadow m-b-24">
                      <section class="dp-addons-wrapper">
                        <header>
                          <h3 class="dp-second-order-title">
                            Reportes Personalizados
                            <span class="dpicon iconapp-growth-chart"></span>
                          </h3>
                        </header>
                        <article class="dp-container">
                          <div class="dp-rowflex dp-content-addons">
                            <div class="col-sm-6">
                              <p>
                                Obtén un informe customizado con las métricas
                                que precisas para medir tus Campañas. Profundiza
                                en los insights y optimiza tu estrategia.
                              </p>
                            </div>
                            <div class="col-sm-3">
                              <span class="dp-legend-price"
                                >Reporte mensual</span
                              >
                              <h2>US$50*</h2>
                              <span class="dp-disclaimer">*Por mes</span>
                            </div>
                            <div class="col-sm-3">
                              <span class="dp-legend-price"
                                >Reporte por única vez</span
                              >
                              <h2>US$150</h2>
                              <span class="dp-disclaimer"></span>
                            </div>
                          </div>
                        </article>
                        <hr />
                        <footer class="dp-footer-addons">
                          <a href="#" class="dp-more">Mas informacion</a>
                          <button
                            type="button"
                            class="dp-button button-medium secondary-green"
                          >
                            Comprar Ahora
                          </button>
                        </footer>
                      </section>
                    </div>
                    <div class="dp-box-shadow m-b-24">
                      <section class="dp-addons-wrapper">
                        <header>
                          <h3 class="dp-second-order-title">
                            Envío y automatización de SMS
                            <span
                              class="dpicon iconapp-mobile-messaging"
                            ></span>
                          </h3>
                        </header>
                        <article class="dp-container">
                          <div class="dp-rowflex dp-content-addons">
                            <div class="col-sm-6">
                              <p class="p-r-24">
                                Implementa SMS Marketing para llegar a tus
                                Contactos de forma inmediata y refuerza tu
                                estrategia de Marketing Automation.
                              </p>
                            </div>
                            <div class="col-sm-3">
                              <span class="dp-legend-price">Carga desde</span>
                              <h2>US$50*</h2>
                              <span class="dp-disclaimer">*Compra mínima</span>
                            </div>
                            <div class="col-sm-3"></div>
                          </div>
                        </article>
                        <hr />
                        <footer class="dp-footer-addons">
                          <a href="#" class="dp-more">Mas informacion</a>
                          <button
                            type="button"
                            class="dp-button button-medium secondary-green"
                          >
                            Comprar Ahora
                          </button>
                        </footer>
                      </section>
                    </div>
                    <div class="dp-box-shadow m-b-24">
                      <section class="dp-addons-wrapper">
                        <header>
                          <h3 class="dp-second-order-title">
                            Servicio de Maquetación
                            <span class="dpicon iconapp-source-file"></span>
                          </h3>
                        </header>
                        <article class="dp-container">
                          <div class="dp-rowflex dp-content-addons">
                            <div class="col-sm-6">
                              <p>
                                Si el catálogo de templates no concuerda con tus
                                necesidades, te ayudamos a crear plantillas
                                especificas para tu negocio.
                              </p>
                            </div>
                            <div class="col-sm-3">
                              <span class="dp-legend-price">Desde</span>
                              <h2>US$80*</h2>
                              <span class="dp-disclaimer"
                                >*Por pieza en editor</span
                              >
                            </div>
                            <div class="col-sm-3">
                              <span class="dp-legend-price">Desde</span>
                              <h2>US$200</h2>
                              <span class="dp-disclaimer"
                                >*Por pieza en Html</span
                              >
                            </div>
                          </div>
                        </article>
                        <hr />
                        <footer class="dp-footer-addons">
                          <a href="#" class="dp-more">Mas informacion</a>
                          <button
                            type="button"
                            class="dp-button button-medium secondary-green"
                          >
                            Comprar Ahora
                          </button>
                        </footer>
                      </section>
                    </div>
                    <div class="dp-box-shadow m-b-24">
                      <section class="dp-addons-wrapper">
                        <header>
                          <h3 class="dp-second-order-title">
                            Entorno Dedicado
                            <span
                              class="dpicon iconapp-computer-setting"
                            ></span>
                          </h3>
                        </header>
                        <article class="dp-container">
                          <div class="dp-rowflex dp-content-addons">
                            <div class="col-sm-6">
                              <p>
                                Accede a un entorno dedicado y una IP exclusiva,
                                configurados para tu dominio. Te garantizará una
                                buena reputación y capacidad de entrega.
                              </p>
                            </div>
                            <div class="col-sm-3">
                              <span class="dp-legend-price">Accede por</span>
                              <h2>US$150*</h2>
                              <span class="dp-disclaimer">*Por mes</span>
                            </div>
                            <div class="col-sm-3"></div>
                          </div>
                        </article>
                        <hr />
                        <footer class="dp-footer-addons">
                          <a href="#" class="dp-more">Mas informacion</a>
                          <button
                            type="button"
                            class="dp-button button-medium secondary-green"
                          >
                            Comprar Ahora
                          </button>
                        </footer>
                      </section>
                    </div>
                    <div class="dp-box-shadow m-b-24">
                      <section class="dp-addons-wrapper">
                        <header>
                          <h3 class="dp-second-order-title">
                            IP Dedicada
                            <span class="dpicon iconapp-dataserver"></span>
                          </h3>
                        </header>
                        <article class="dp-container">
                          <div class="dp-rowflex dp-content-addons">
                            <div class="col-sm-6">
                              <p>
                                Obtén una IP dedicada, exclusivamente para tus
                                envíos. Seteada bajo minuciosos estándares de
                                seguridad, para una óptima entregabilidad.
                              </p>
                            </div>
                            <div class="col-sm-3">
                              <span class="dp-legend-price">Accede por</span>
                              <h2>US$30*</h2>
                              <span class="dp-disclaimer">*Por mes</span>
                            </div>
                            <div class="col-sm-3"></div>
                          </div>
                        </article>
                        <hr />
                        <footer class="dp-footer-addons">
                          <a href="#" class="dp-more">Mas informacion</a>
                          <button
                            type="button"
                            class="dp-button button-medium secondary-green"
                          >
                            Comprar Ahora
                          </button>
                        </footer>
                      </section>
                    </div>
                    <div class="dp-box-shadow m-b-24">
                      <section class="dp-addons-wrapper">
                        <header>
                          <h3 class="dp-second-order-title">
                            Envíos Transaccionales
                            <span class="dpicon iconapp-mail-info"></span>
                          </h3>
                        </header>
                        <article class="dp-container">
                          <div class="dp-rowflex dp-content-addons">
                            <div class="col-sm-6">
                              <p>
                                Dispara Emails o SMS ante interacciones de los
                                usuarios con tu Sitio Web, aplicación o sistema
                                y para comunicar información sensible a
                                clientes.
                              </p>
                            </div>
                            <div class="col-sm-3">
                              <span class="dp-legend-price"
                                >Plan 50.000 Emails</span
                              >
                              <h2>US$26,50*</h2>
                              <span class="dp-disclaimer">*Por mes</span>
                            </div>
                            <div class="col-sm-3"></div>
                          </div>
                        </article>
                        <hr />
                        <footer class="dp-footer-addons">
                          <a href="#" class="dp-more">Mas informacion</a>
                          <button
                            type="button"
                            class="dp-button button-medium secondary-green"
                          >
                            Comprar Ahora
                          </button>
                        </footer>
                      </section>
                    </div>
                    <div class="dp-box-shadow m-b-24">
                      <section class="dp-addons-wrapper">
                        <header>
                          <h3 class="dp-second-order-title">
                            Pack de Landing Pages
                            <span class="dpicon iconapp-landing-page"></span>
                          </h3>
                        </header>
                        <article class="dp-container">
                          <div class="dp-rowflex dp-content-addons">
                            <div class="col-sm-6">
                              <p>
                                Utiliza páginas de destino para captar a tus
                                clientes en múltiples dispositivos y guíalos a
                                la conversión.
                              </p>
                            </div>
                            <div class="col-sm-3">
                              <span class="dp-legend-price">Packs desde</span>
                              <h2>US$10*</h2>
                              <span class="dp-disclaimer">*Por mes</span>
                            </div>
                            <div class="col-sm-3"></div>
                          </div>
                        </article>
                        <hr />
                        <footer class="dp-footer-addons">
                          <a href="#" class="dp-more">Mas informacion</a>
                          <button
                            type="button"
                            class="dp-button button-medium secondary-green"
                          >
                            Comprar Ahora
                          </button>
                        </footer>
                      </section>
                    </div>
                    <div class="dp-box-shadow m-b-24">
                      <section class="dp-addons-wrapper">
                        <header>
                          <h3 class="dp-second-order-title">
                            Conversaciones
                            <span class="dpicon iconapp-chatting"></span>
                          </h3>
                        </header>
                        <article class="dp-container">
                          <div class="dp-rowflex dp-content-addons">
                            <div class="col-sm-6">
                              <p>
                                Lorem ipsum dolor sit amet consectetur. Ac
                                eleifend diam lobortis montes eget proin purus.
                                Faucibus viverra suspendisse molestie viverra.
                              </p>
                            </div>
                            <div class="col-sm-3">
                              <span class="dp-legend-price">Planes desde</span>
                              <h2>US$30*</h2>
                              <span class="dp-disclaimer">*Por mes</span>
                            </div>
                            <div class="col-sm-3"></div>
                          </div>
                        </article>
                        <hr />
                        <footer class="dp-footer-addons">
                          <a href="#" class="dp-more">Mas informacion</a>
                          <button
                            type="button"
                            class="dp-button button-medium secondary-green"
                          >
                            Comprar Ahora
                          </button>
                        </footer>
                      </section>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-12">
                    <div class="dp-box-shadow">
                      <div class="dp-card-grey">
                        <h4>ASESORIA Y ACOMPAÑAMIENTO ESTRATEICO</h4>
                        <h2>
                          Te ayudaremos a alcanzar los objetivos en tus campañas
                        </h2>
                        <p>
                          Revisaremos juntos cada aspecto de tu estrategia
                          actual y te ayudaremos a diseñar el plan de acción
                          ideal para alcanzar tus objetivos.
                        </p>
                        <button
                          type="button"
                          class="dp-button button-medium primary-green dp-w-100"
                        >
                          Solicitar consultoría
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article class="tab--content">
              <div class="dp-container col-p-l-0 col-p-r-0">
                <div class="dp-rowflex">
                  <div class="col-lg-8 col-md-12 m-b-24">
                    <div class="dp-box-shadow">
                      <p>Content</p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-12">
                    <div class="dp-box-shadow"><p>columna</p></div>
                  </div>
                </div>
              </div>
            </article>
            <article class="tab--content">
              <div class="dp-container">
                <div class="dp-rowflex">
                  <div class="col-lg-8 col-md-12 m-b-24">
                    <div class="dp-box-shadow">
                      <p>Content</p>
                    </div>
                  </div>
                  <div class="col-lg-4 col-sm-12">
                    <div class="dp-box-shadow"><p>columna</p></div>
                  </div>
                </div>
              </div>
            </article>
            <article class="tab--content active">
              <div class="dp-container">
                <div class="dp-rowflex">
                  <div class="col-lg-8 col-md-12 m-b-24">
                    <div class="dp-box-shadow p-t-30 p-b-30 p-l-30 p-r-30">
                      <button
                        id="btn-cancel-subscription"
                        type="button"
                        class="dp-button button-medium primary-green"
                      >
                        Cancel subscription
                      </button>

                      <button
                        id="btn-discount-code-confirmation"
                        type="button"
                        class="dp-button button-medium primary-green"
                      >
                        Request discount code confirmation
                      </button>

                      <button
                        id="btn-pre-cancellation-subscription"
                        type="button"
                        class="dp-button button-medium primary-green"
                      >
                        Pre cancellation subscription
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div class="modal" id="modal-cancel-subscription">
        <div class="modal-content--medium">
          <span class="close"></span>
          <h2 class="modal-title">Cancelar suscripción</h2>
          <p>
            Queremos que su proceso de desuscripción curse sin problemas y que
            podamos responder cualquier duda antes de cancelar.
            <strong
              >Completa los siguientes datos para iniciar la gestión.</strong
            >
          </p>
          <h4>Datos de contacto:</h4>
          <form action="#" class="awa-form">
            <legend>Añadir nuevo colaborador</legend>
            <fieldset>
              <ul class="field-group">
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
                          type="name"
                          id="name"
                          name="Name"
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
                        for="lastname"
                        class="labelcontrol"
                        aria-disabled="false"
                        data-required="true"
                        >Apellido
                        <input
                          type="lastname"
                          id="lastname"
                          name="lastname"
                          placeholder="Your lastname"
                          aria-required="true"
                          aria-invalid="false"
                          aria-placeholder="lastname"
                        />
                        <!-- <div class="assistance-wrap">
                        <span>Assistive text</span>
                      </div> -->
                      </label>
                    </li>
                  </ul>
                </li>
                <li class="field-item">
                  <ul class="field-group">
                    <li class="field-item field-item--50">
                      <label
                        for="schedule"
                        class="labelcontrol"
                        aria-disabled="false"
                        data-required="true"
                        >¿ En que horario podemos llamarte?:
                        <input
                          type="text"
                          id="schedule"
                          name="schedule"
                          placeholder="1am a 6pm"
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
                        for="tel"
                        class="labelcontrol"
                        aria-disabled="false"
                        data-required="true"
                        >Teléfono
                        <input
                          type="number"
                          id="tel"
                          name="tel"
                          placeholder="Your Phone"
                          aria-required="true"
                          aria-invalid="false"
                          aria-placeholder="Your Phone"
                        />
                        <div class="iti iti--allow-dropdown"></div>
                        <!-- <div class="assistance-wrap assistance-error">
                        <span>Assistive text</span>
                      </div> -->
                      </label>
                    </li>
                  </ul>
                </li>
              </ul>
              <h4>Motivo de cancelación:</h4>
              <ul class="field-group">
                <li class="field-item">
                  <ul class="field-group">
                    <li class="field-item field-item--50">
                      <div class="dp-input--radio" checked="">
                        <label>
                          <input type="radio" name="radio" />
                          <span>No alcancé los objetivos esperados</span>
                        </label>
                      </div>
                    </li>
                    <li class="field-item field-item--50">
                      <div class="dp-input--radio" checked="">
                        <label>
                          <input type="radio" name="radio" />
                          <span>Mi proyecto terminó</span>
                        </label>
                      </div>
                    </li>
                    <li class="field-item field-item--50">
                      <div class="dp-input--radio" checked="">
                        <label>
                          <input type="radio" name="radio" />
                          <span>Doppler es caro a mi presupuesto</span>
                        </label>
                      </div>
                    </li>
                    <li class="field-item field-item--50">
                      <div class="dp-input--radio" checked="">
                        <label>
                          <input type="radio" name="radio" />
                          <span class="dp-radio-twolines"
                            >A Doppler le falta una o varias
                            funcionalidades</span
                          >
                        </label>
                      </div>
                    </li>
                    <li class="field-item field-item--50">
                      <div class="dp-input--radio" checked="">
                        <label>
                          <input type="radio" name="radio" />
                          <span>Doppler no funciona correctamente</span>
                        </label>
                      </div>
                    </li>
                  </ul>
                </li>
                <li class="field-item m-t-18">
                  <label
                    for="textarea"
                    class="labelcontrol"
                    aria-disabled="false"
                    data-required="true"
                  >
                    Indica que funcionalidad te gustaría que agreguemos:
                    <textarea
                      name="textarea"
                      rows="10"
                      cols="50"
                      class="m-t-6"
                      placeholder="Escribe una funcionalidad"
                    ></textarea>
                  </label>
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
      <div class="modal" id="modal-discount-code-confirmation">
        <div class="modal-content--medium">
          <span class="close"></span>
          <h2 class="modal-title">¡Solicitaste tu código de descuento!</h2>
          <p>
            Estaremos activando tu código de descuento y podrás ver el beneficio
            aplicado en tu próxima factura. Nos alegra poder continuar
            ayudándote a alcanzar tus objetivos de negocio.
          </p>
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
                Aceptar
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="modal" id="modal-pre-cancellation-subscription">
        <div class="modal-content--small">
          <span class="dp-arrow-back"></span>
          <!-- <div class="dp-bg-pic"></div> -->
          <div class="dp-bg-retention">foto</div>
          <h4>¡Te brindamos una Asesoría Estratégica totalmente gratis!</h4>
          <p>
            Solicita la asesoría y fija una reunión con nuestros asesores para
            que puedan ayudarte a alcanzar tus objetivos de negocio.
          </p>
          <button
            type="button"
            class="dp-button button-medium primary-green dp-w-100 m-b-18"
          >
            Solicitar asesoría
          </button>
          <a href="#" class="dp-link-cancellation"
            >CONTINUAR CON LA CANCELACIÓN</a
          >
        </div>
      </div>
    </section>
  `;
};
