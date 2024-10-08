import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const TypePlan = ({ disabled }) => {
  return html`
    <section class="dp-library">
      <div class="dp-app-container">
        <section class="p-t-30 p-b-30">
          <div class="dp-align-center dp-header-text">
            <h1 class="dp-tit-center--big">Tipos de planes</h1>
            <p class="dp-p-w-50">
              Selecciona el mejor plan que se adapte a tu Estrategia de Email
              Marketing.
            </p>
            <p class="dp-p-w-50">
              <strong
                >Todos los planes incluyen todas las Funcionalidades.</strong
              >
            </p>
          </div>
          <div class="dp-container">
            <div class="dp-rowflex">
              <!-- Nuevos planes -->
              <section class="col-sm-12">
                <article>
                  <div class="dp-align-center">
                    <div class="dp-card-with-border dp-card-disabled">
                      <div class="dp-content-plans">
                        <h3>Gratis</h3>
                        <p class="dp-ta-left">
                          Envía Emails ilimitados a 500 Contactos durante 90
                          días.
                        </p>
                        <p class="dp-ta-left">
                          <strong
                            >Es el plan ideal si deseas probar y descubrir
                            Doppler.</strong
                          >
                        </p>
                      </div>
                      <div class="dp-price">
                        <button
                          type="button"
                          class="dp-button button-medium ctaTertiary"
                          disabled
                        >
                          Plan actual
                        </button>
                      </div>
                      <hr class="dp-border" />
                      <div class="dp-whatcan">
                        <h4>¿Qué podrás hacer con este Plan?</h4>
                        <ul>
                          <li>Campañas clásicas, sociales y Test A/B.</li>
                          <li>Formularios de Suscripción Clásicos y Pop-up.</li>
                          <li>Automatizaciones</li>
                          <li>Notificaciones Push y SMS</li>
                          <li>Reportes personalizados</li>
                        </ul>
                        <a href="#">Ver todas las funcionalidades</a>
                      </div>
                    </div>
                    <div class="dp-card-with-border">
                      <div
                        class="dp-ribbon dp-ribbon-top-right dp-ribbon-orange"
                      >
                        <span>MAS ELEGIDO</span>
                      </div>
                      <div class="dp-content-plans">
                        <h3>Contactos</h3>
                        <p class="dp-ta-left">
                          Send unlimited Emails based on your number of
                          Contacts.
                        </p>
                        <p class="dp-ta-left">
                          <strong
                            >It is the ideal plan if you frequently send your
                            Campaigns at the same amount.</strong
                          >
                        </p>
                      </div>
                      <div class="dp-price">
                        <span>Desde</span>
                        <span class="dp-discount-price-arg"
                          >US$ 62.999/mes**</span
                        >
                        <h3>US$X,00*/mes</h3>
                        <button
                          type="button"
                          class="dp-button button-medium dp-uppercase dp-secondary-blue"
                        >
                          Calcular valor
                        </button>
                        <span class="dp-off"
                          ><strong>20% OFF</strong> Exclusivo para
                          Argentina</span
                        >
                      </div>
                      <hr class="dp-border" />
                      <div class="dp-whatcan">
                        <h4>¿Qué podrás hacer con este Plan?</h4>
                        <ul>
                          <li>Campañas clásicas, sociales y Test A/B.</li>
                          <li>Formularios de Suscripción Clásicos y Pop-up.</li>
                          <li>Automatizaciones</li>
                          <li>Notificaciones Push y SMS</li>
                          <li>Reportes personalizados</li>
                        </ul>
                        <a href="#">Ver todas las funcionalidades</a>
                      </div>
                    </div>
                    <div class="dp-card-with-border">
                      <div class="dp-content-plans">
                        <h3>Envíos</h3>
                        <p class="dp-ta-left">
                          Envía una gran cantidad de Emails a un bajo costo
                          unitario.
                        </p>
                        <p class="dp-ta-left">
                          <strong
                            >Es el plan ideal si envías numerosas
                            Campañas.</strong
                          >
                        </p>
                      </div>
                      <div class="dp-price">
                        <span>Desde</span>
                        <h3>US$X,00*/mes</h3>
                        <button
                          type="button"
                          class="dp-button button-medium primary-green dp-uppercase"
                        >
                          Calcular valor
                        </button>
                      </div>
                      <hr class="dp-border" />
                      <div class="dp-whatcan">
                        <h4>¿Qué podrás hacer con este Plan?</h4>
                        <ul>
                          <li>Campañas clásicas, sociales y Test A/B.</li>
                          <li>Formularios de Suscripción Clásicos y Pop-up.</li>
                          <li>Automatizaciones</li>
                          <li>Notificaciones Push y SMS</li>
                          <li>Reportes personalizados</li>
                        </ul>
                        <a href="#">Ver todas las funcionalidades</a>
                      </div>
                    </div>
                    <div class="dp-card-with-border">
                      <div class="dp-content-plans">
                        <h3>Créditos</h3>
                        <p class="dp-ta-left">
                          Envía Emails a partir de créditos acumulables y sin
                          vencimiento.
                        </p>
                        <p class="dp-ta-left">
                          <strong
                            >Es el plan ideal para enviar Campañas
                            ocasionales.</strong
                          >
                        </p>
                      </div>
                      <div class="dp-price">
                        <span>Desde</span>
                        <h3>US$X,00*/mes</h3>
                        <button
                          type="button"
                          class="dp-button button-medium primary-green dp-uppercase"
                        >
                          Calcular valor
                        </button>
                      </div>
                      <hr class="dp-border" />
                      <div class="dp-whatcan">
                        <h4>¿Qué podrás hacer con este Plan?</h4>
                        <ul>
                          <li>Campañas clásicas, sociales y Test A/B.</li>
                          <li>Formularios de Suscripción Clásicos y Pop-up.</li>
                          <li>Automatizaciones</li>
                          <li>Notificaciones Push y SMS</li>
                          <li>Reportes personalizados</li>
                        </ul>
                        <a href="#">Ver todas las funcionalidades</a>
                      </div>
                    </div>
                  </div>
                </article>
              </section>
              <div class="col-sm-12">
                <div class="dp-banner-big">
                  <div class="col-sm-12 col-md-9 dp-banner-content">
                    <div class="dp-content-banner">
                      <h3>Agencias</h3>
                      <p>
                        La solución ideal para quienes gestionan múltiples
                        cuentas. Simplifica tu gestión desde el Client Manager.
                      </p>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-3 text-align--right">
                    <button
                      type="button"
                      class="dp-button button-medium ctaTertiary"
                    >
                      SOLÍCITA UNA DEMO
                    </button>
                  </div>
                </div>
              </div>
              <div class="dp-banner-payment-methods">
                <h4 class="dp-tit-payment-methods">Métodos de pago</h4>
                <span class="dp-mercado"></span>
                <span class="dp-visa"></span>
                <span class="dp-mastercard"></span>
                <span class="dp-american"></span>
                <h4 class="dp-tit-transfer">
                  <span class="dpicon iconapp-card-accepted"></span
                  >Transferencia
                </h4>
              </div>
              <div class="dp-align-center dp-header-text">
                <h1 class="dp-tit-center--big">
                  Conoce todas las funcionalidades
                </h1>
                <p class="dp-p-w-50">
                  Todos nuestros planes incluyen todas nuestras funcionalidades.
                </p>
                <p class="dp-p-w-50">
                  <strong>¡Conoce todo lo que puedes hacer con Doppler!</strong>
                </p>
              </div>
              <div class="col-sm-12 m-t-24 m-b-36">
                <div class="dp-table-plans m-b-36">
                  <header class="dp-header-plans dp-rowflex">
                    <div class="col-lg-6 col-md-12">
                      <h3>Automation</h3>
                    </div>
                  </header>
                  <div class="dp-table-responsive">
                    <table
                      class="dp-c-table dp-nested-table"
                      aria-label=""
                      summary=""
                    >
                      <tbody>
                        <tr>
                          <td>
                            <div class="dp-icon-lock">
                              <span class="dp-ico--ok"></span>
                              <span>Carrito Abandonado</span>
                            </div>
                          </td>
                          <td>
                            <span
                              >Programa envíos automáticos cada vez que un
                              usuario abandona su compra y motívalo a que la
                              finalice.</span
                            >
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="dp-icon-lock">
                              <span class="dp-ico--ok"></span>
                              <span>Comportamiento en Campaña</span>
                            </div>
                          </td>
                          <td>
                            <span
                              >Configura envíos en base a las interacciones que
                              tus Contactos hayan tenido con tus Campañas.</span
                            >
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="dp-icon-lock">
                              <span class="dp-ico--ok"></span>
                              <span>Comportamiento en Sitio</span>
                            </div>
                          </td>
                          <td>
                            <span
                              >Programa envíos con contenidos vinculados a las
                              páginas que visitó tu Contacto.</span
                            >
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="dp-icon-lock">
                              <span class="dp-ico--ok"></span>
                              <span>Envío de SMS</span>
                            </div>
                          </td>
                          <td>
                            <span
                              >Agrega envíos de mensajes de texto a tus
                              Campañas.</span
                            >
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="dp-icon-lock">
                              <span class="dp-ico--ok"></span>
                              <span>Nombre</span>
                            </div>
                          </td>
                          <td>
                            <span
                              >Agrega envíos de mensajes de texto a tus
                              Campañas.</span
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- table -->
                <div class="dp-table-plans m-b-36">
                  <header class="dp-header-plans dp-rowflex">
                    <div class="col-lg-6 col-md-12">
                      <h3>Funcionalidades - Automation</h3>
                    </div>
                  </header>
                  <div class="dp-table-responsive">
                    <table
                      class="dp-c-table dp-nested-table"
                      aria-label=""
                      summary=""
                    >
                      <tbody>
                        <tr>
                          <td>
                            <span class="dp-name-text"
                              ><button type="button" class="dp-expand-results">
                                <i class="ms-icon icon-arrow-next"></i></button
                              ><strong>Comportamiento en sitio</strong></span
                            >
                          </td>
                          <td>
                            <span
                              >Programa Emails con contenidos vinculados a las
                              páginas que visitó tu Contacto.</span
                            >
                          </td>
                          <td>
                            <div class="dp-icon-lock">
                              <span class="dp-ico--AddProduct"></span>
                              <span>Costos extras</span>
                            </div>
                          </td>
                        </tr>
                        <tr class="dp-expanded-table">
                          <td class="dp-unexpected-error-table" colspan="1">
                            <span
                              ><strong>Comportamiento en sitio</strong></span
                            >
                          </td>
                          <td class="dp-unexpected-error-table" colspan="2">
                            <span
                              >Programa Emails con contenidos vinculados a las
                              páginas que visitó tu Contacto.</span
                            >
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span class="dp-name-text"
                              ><button type="button" class="dp-expand-results">
                                <i class="ms-icon icon-arrow-next"></i></button
                              ><strong>Comportamiento en Campaña</strong></span
                            >
                          </td>
                          <td>
                            <span
                              >Breve descripción. Lorem ipsum dolor sit amet
                              consectetur.</span
                            >
                          </td>
                          <td>
                            <div class="dp-icon-lock">
                              <span class="dp-ico--ok"></span>
                              <span>Incluido en todos los planes</span>
                            </div>
                          </td>
                        </tr>
                        <!-- <tr class="dp-expanded-table">
                          <td class="dp-latest-results">
                            <span>"Ultimos 10 resultados"</span>
                          </td>
                          <td class="dp-list-results">
                            <table class="dp-table-results">
                              <thead>
                                <tr>
                                  <th aria-label="Consentimiento" scope="col">
                                    <span>Consentimiento:</span>
                                  </th>
                                  <th
                                    aria-label="IP origen demodificación"
                                    scope="col"
                                  >
                                    <span>IP origen demodificación:</span>
                                  </th>
                                  <th aria-label="Fecha de modificación" scope="col">
                                    <span>Fecha de modificación:</span>
                                  </th>
                                  <th aria-label="Formulario de origen" scope="col">
                                    <span>Formulario de origen:</span>
                                  </th>
                                </tr>
                              </thead>
                              <tdbody>
                                <tr>
                                  <td>
                                    <span
                                      ><span
                                        class="ms-icon icon-lock dp-lock-green"
                                      ></span>
                                      Aceptado</span
                                    >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 3</span></td>
                                </tr>
                                <tr>
                                  <td>
                                    <span
                                      ><span
                                        class="ms-icon icon-lock dp-lock-red"
                                      ></span>
                                      Rechazado</span
                                    >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 1</span></td>
                                </tr>
                                <tr>
                                  <td>
                                    <span
                                      ><span
                                        class="ms-icon icon-lock dp-lock-grey"
                                      ></span>
                                      Sin respuesta</span
                                    >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 2</span></td>
                                </tr>
                                <tr>
                                  <td>
                                    <span
                                      ><span
                                        class="ms-icon icon-lock dp-lock-grey"
                                      ></span>
                                      Sin respuesta</span
                                    >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 4</span></td>
                                </tr>
                                <tr>
                                  <td>
                                    <span
                                      ><span
                                        class="ms-icon icon-lock dp-lock-green"
                                      ></span>
                                      Aceptado</span
                                    >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 3</span></td>
                                </tr>
                                <tr>
                                  <td>
                                    <span
                                      ><span
                                        class="ms-icon icon-lock dp-lock-green"
                                      ></span>
                                      Aceptado</span
                                    >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 3</span></td>
                                </tr>
                                <tr>
                                  <td>
                                    <span
                                      ><span
                                        class="ms-icon icon-lock dp-lock-green"
                                      ></span>
                                      Aceptado</span
                                    >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 3</span></td>
                                </tr>
                                <tr>
                                  <td>
                                    <span
                                      ><span
                                        class="ms-icon icon-lock dp-lock-red"
                                      ></span>
                                      Rechazado</span
                                    >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 1</span></td>
                                </tr>
                                <tr>
                                  <td>
                                    <span
                                      ><span
                                        class="ms-icon icon-lock dp-lock-green"
                                      ></span>
                                      Aceptado</span
                                    >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 3</span></td>
                                </tr>
                                <tr>
                                  <td>
                                    <span
                                      ><span
                                        class="ms-icon icon-lock dp-lock-red"
                                      ></span>
                                      Rechazado</span
                                    >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 1</span></td>
                                </tr>
                              </tdbody>
                            </table>
                          </td>
                          <td></td>
                        </tr> -->
                        <tr>
                          <td>
                            <span class="dp-name-text"
                              ><button type="button" class="dp-expand-results">
                                <i class="ms-icon icon-arrow-next"></i></button
                              ><strong>Suscripción a Listas</strong></span
                            >
                          </td>
                          <td>
                            <span
                              >Breve descripción. Lorem ipsum dolor sit amet
                              consectetur.</span
                            >
                          </td>
                          <td>
                            <div class="dp-icon-lock">
                              <span class="dp-ico--ok"></span>
                              <span>Incluido en todos los planes</span>
                            </div>
                          </td>
                        </tr>
                        <!-- <tr class="dp-expanded-table">
                          <td class="dp-latest-results">
                            <span>"Ultimos 10 resultados"</span>
                          </td>
                          <td class="dp-list-results">
                            <table class="dp-table-results">
                              <thead>
                                <tr>
                                  <th aria-label="Consentimiento" scope="col">
                                    <span>Consentimiento:</span>
                                  </th>
                                  <th
                                    aria-label="IP origen demodificación"
                                    scope="col"
                                  >
                                    <span>IP origen demodificación:</span>
                                  </th>
                                  <th aria-label="Fecha de modificación" scope="col">
                                    <span>Fecha de modificación:</span>
                                  </th>
                                  <th aria-label="Formulario de origen" scope="col">
                                    <span>Formulario de origen:</span>
                                  </th>
                                </tr>
                              </thead>
                              <tdbody>
                                <tr>
                                  <td>
                                    <span
                                      ><span
                                        class="ms-icon icon-lock dp-lock-green"
                                      ></span>
                                      Aceptado</span
                                    >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 3</span></td>
                                </tr>
                                <tr>
                                  <td>
                                    <span
                                      ><span
                                        class="ms-icon icon-lock dp-lock-red"
                                      ></span>
                                      Rechazado</span
                                    >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 1</span></td>
                                </tr>
                                <tr>
                                  <td>
                                    <span
                                      ><span
                                        class="ms-icon icon-lock dp-lock-grey"
                                      ></span>
                                      Sin respuesta</span
                                    >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 2</span></td>
                                </tr>
                                <tr>
                                  <td>
                                    <span
                                      ><span
                                        class="ms-icon icon-lock dp-lock-grey"
                                      ></span>
                                      Sin respuesta</span
                                    >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 4</span></td>
                                </tr>
                                <tr>
                                  <td>
                                    <span
                                      ><span
                                        class="ms-icon icon-lock dp-lock-green"
                                      ></span>
                                      Aceptado</span
                                    >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 3</span></td>
                                </tr>
                                <tr>
                                  <td>
                                    <span
                                      ><span
                                        class="ms-icon icon-lock dp-lock-green"
                                      ></span>
                                      Aceptado</span
                                    >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 3</span></td>
                                </tr>
                                <tr>
                                  <td>
                                    <span
                                      ><span
                                        class="ms-icon icon-lock dp-lock-green"
                                      ></span>
                                      Aceptado</span
                                    >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 3</span></td>
                                </tr>
                                <tr>
                                  <td>
                                    <span
                                      ><span
                                        class="ms-icon icon-lock dp-lock-red"
                                      ></span>
                                      Rechazado</span
                                    >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 1</span></td>
                                </tr>
                                <tr>
                                  <td>
                                    <span
                                      ><span
                                        class="ms-icon icon-lock dp-lock-green"
                                      ></span>
                                      Aceptado</span
                                    >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 3</span></td>
                                </tr>
                                <tr>
                                  <td>
                                    <span
                                      ><span
                                        class="ms-icon icon-lock dp-lock-red"
                                      ></span>
                                      Rechazado</span
                                    >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 1</span></td>
                                </tr>
                              </tdbody>
                            </table>
                          </td>
                          <td></td>
                        </tr> -->
                        <tr>
                          <td>
                            <span class="dp-name-text"
                              ><button type="button" class="dp-expand-results">
                                <i class="ms-icon icon-arrow-next"></i></button
                              ><strong>Fechas Programadas</strong></span
                            >
                          </td>
                          <td>
                            <span
                              >Breve descripción. Lorem ipsum dolor sit amet
                              consectetur.</span
                            >
                          </td>
                          <td>
                            <div class="dp-icon-lock">
                              <span class="dp-ico--ok"></span>
                              <span>Incluido en todos los planes</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- table -->
                <div class="dp-table-plans m-b-36">
                  <header class="dp-header-plans dp-rowflex">
                    <div class="col-lg-6 col-md-12">
                      <h3>Funcionalidades - Omnicanalidad</h3>
                    </div>
                  </header>
                  <div class="dp-table-responsive">
                    <table
                      class="dp-c-table dp-nested-table"
                      aria-label=""
                      summary=""
                    >
                      <tbody>
                        <tr>
                          <td>
                            <span class="dp-name-text"
                              ><button type="button" class="dp-expand-results">
                                <i class="ms-icon icon-arrow-next"></i></button
                              ><strong>SMS</strong></span
                            >
                          </td>
                          <td>
                            <span
                              >Breve descripción. Lorem ipsum dolor sit amet
                              consectetur.</span
                            >
                          </td>
                          <td>
                            <div class="dp-icon-lock">
                              <span class="dp-ico--ok"></span>
                              <span>Incluido en todos los planes</span>
                            </div>
                          </td>
                        </tr>
                        <tr class="dp-expanded-table">
                          <td class="dp-unexpected-error-table" colspan="1">
                            <span><strong>SMS</strong></span>
                          </td>
                          <td class="dp-unexpected-error-table" colspan="2">
                            <span
                              >Programa Emails con contenidos vinculados a las
                              páginas que visitó tu Contacto.</span
                            >
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span class="dp-name-text"
                              ><button type="button" class="dp-expand-results">
                                <i class="ms-icon icon-arrow-next"></i></button
                              ><strong>Notificaciones Push</strong></span
                            >
                          </td>
                          <td>
                            <span
                              >Breve descripción. Lorem ipsum dolor sit amet
                              consectetur.</span
                            >
                          </td>
                          <td>
                            <div class="dp-icon-lock">
                              <span class="dp-ico--AddProduct"></span>
                              <span>Costos extras</span>
                            </div>
                          </td>
                        </tr>
                        <!-- <tr class="dp-expanded-table">
                          <td class="dp-latest-results">
                          <span>"Ultimos 10 resultados"</span>
                          </td>
                          <td class="dp-list-results">
                          <table class="dp-table-results">
                              <thead>
                              <tr>
                                  <th aria-label="Consentimiento" scope="col">
                                  <span>Consentimiento:</span>
                                  </th>
                                  <th
                                  aria-label="IP origen demodificación"
                                  scope="col"
                                  >
                                  <span>IP origen demodificación:</span>
                                  </th>
                                  <th aria-label="Fecha de modificación" scope="col">
                                  <span>Fecha de modificación:</span>
                                  </th>
                                  <th aria-label="Formulario de origen" scope="col">
                                  <span>Formulario de origen:</span>
                                  </th>
                              </tr>
                              </thead>
                              <tdbody>
                              <tr>
                                  <td>
                                  <span
                                      ><span
                                      class="ms-icon icon-lock dp-lock-green"
                                      ></span>
                                      Aceptado</span
                                  >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 3</span></td>
                              </tr>
                              <tr>
                                  <td>
                                  <span
                                      ><span
                                      class="ms-icon icon-lock dp-lock-red"
                                      ></span>
                                      Rechazado</span
                                  >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 1</span></td>
                              </tr>
                              <tr>
                                  <td>
                                  <span
                                      ><span
                                      class="ms-icon icon-lock dp-lock-grey"
                                      ></span>
                                      Sin respuesta</span
                                  >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 2</span></td>
                              </tr>
                              <tr>
                                  <td>
                                  <span
                                      ><span
                                      class="ms-icon icon-lock dp-lock-grey"
                                      ></span>
                                      Sin respuesta</span
                                  >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 4</span></td>
                              </tr>
                              <tr>
                                  <td>
                                  <span
                                      ><span
                                      class="ms-icon icon-lock dp-lock-green"
                                      ></span>
                                      Aceptado</span
                                  >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 3</span></td>
                              </tr>
                              <tr>
                                  <td>
                                  <span
                                      ><span
                                      class="ms-icon icon-lock dp-lock-green"
                                      ></span>
                                      Aceptado</span
                                  >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 3</span></td>
                              </tr>
                              <tr>
                                  <td>
                                  <span
                                      ><span
                                      class="ms-icon icon-lock dp-lock-green"
                                      ></span>
                                      Aceptado</span
                                  >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 3</span></td>
                              </tr>
                              <tr>
                                  <td>
                                  <span
                                      ><span
                                      class="ms-icon icon-lock dp-lock-red"
                                      ></span>
                                      Rechazado</span
                                  >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 1</span></td>
                              </tr>
                              <tr>
                                  <td>
                                  <span
                                      ><span
                                      class="ms-icon icon-lock dp-lock-green"
                                      ></span>
                                      Aceptado</span
                                  >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 3</span></td>
                              </tr>
                              <tr>
                                  <td>
                                  <span
                                      ><span
                                      class="ms-icon icon-lock dp-lock-red"
                                      ></span>
                                      Rechazado</span
                                  >
                                  </td>
                                  <td><span>200.5.229.58</span></td>
                                  <td><span>22/12/2016</span></td>
                                  <td><span>Formulario 1</span></td>
                              </tr>
                              </tdbody>
                          </table>
                          </td>
                          <td></td>
                      </tr> -->
                        <tr>
                          <td>
                            <span class="dp-name-text"
                              ><button type="button" class="dp-expand-results">
                                <i class="ms-icon icon-arrow-next"></i></button
                              ><strong>Email Transaccional </strong></span
                            >
                          </td>
                          <td>
                            <span
                              >Breve descripción. Lorem ipsum dolor sit amet
                              consectetur.</span
                            >
                          </td>
                          <td>
                            <div class="dp-icon-lock">
                              <span class="dp-ico--ok"></span>
                              <span>Incluido en todos los planes</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  `;
};
