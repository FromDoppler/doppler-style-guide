import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const navUser = ({}) => {
  return html`
    <article class="dpsg-content">
      <h3>Nav User Menu</h3>
      <p>
        Aca se muestra el menú de usuario de doppler con las distintas variantes
      </p>
      <p><strong>Cuenta Mensual - Solicitud enviada.</strong></p>
      <div class="dgsg-nav-user-menu">
        <div class="user-menu open">
          <header>
            <span class="user-avatar--menu">GB</span>
            <p>
              <span class="name">Gus Baamonde</span
              ><span class="email">gbaamonde@makingsense.com</span>
            </p>
          </header>
          <div class="user-plan--container m-t-18">
            <div class="user-plan--type">
              <p class="user-plan--monthly-text">
                <strong>Cuenta Mensual</strong> (2.500 Suscriptores)
                <span>Texto alternativo para este plan.</span>
              </p>
              <button class="user-plan close-user--menu" type="button">
                comprar
              </button>
            </div>
            <div class="user-plan--type">
              <p><strong>498</strong> Suscriptores disponibles</p>
              <div class="dp-request-sent">
                <button
                  class="user-plan close-user--menu dp-tooltip-left"
                  type="button"
                >
                  solicitud enviada
                  <div class="tooltiptext">
                    Estamos diseñando un Plan a la medida de tus necesidades.¡Te
                    contactaremos pronto!
                  </div>
                </button>
                <span class="ms-icon icon-info-icon"></span>
                <div class="dp-tooltip-container"></div>
              </div>
            </div>
          </div>
          <ul class="options-user">
            <li><a href="">Panel de Control</a></li>
            <li><a href="">Centro de descargas</a></li>
            <li><a href="">Primeros pasos en Doppler</a></li>
            <li><a href="">Salir</a></li>
          </ul>
        </div>
      </div>
      <p><strong>Cuenta Multilogin - colaborador/propietario.</strong></p>
      <div class="dgsg-nav-user-menu">
        <div class="user-menu open">
          <header class="header-user-info">
            <span class="user-avatar--menu">GB</span>
            <div class="dp-info-user">
              <p>
                <span class="name">Gus Baamonde</span
                ><span class="email">gbaamonde@makingsense.com</span>
                <span class="dp-account-status">
                  <span>Propietario</span>
                </span>
              </p>
              <button
                type="button"
                class="dp-button button-small primary-green dp-w-100"
              >
                Ver todas las cuentas
              </button>
            </div>
          </header>
          <div class="user-plan--container m-t-18">
            <div class="user-plan--type">
              <p class="user-plan--monthly-text">
                <strong>Cuenta Mensual</strong> (2.500 Suscriptores)
                <span>Texto alternativo para este plan.</span>
              </p>
              <button class="user-plan close-user--menu" type="button">
                comprar
              </button>
            </div>
          </div>
          <ul class="options-user">
            <li><a href="">Panel de Control</a></li>
            <li><a href="">Centro de descargas</a></li>
            <li><a href="">Primeros pasos en Doppler</a></li>
            <li><a href="">Salir</a></li>
          </ul>
        </div>
      </div>
      <p><strong>Cuenta Gratis.</strong></p>
      <div class="dgsg-nav-user-menu">
        <div class="user-menu open">
          <header>
            <span class="user-avatar--menu">GB</span>
            <p>
              <span class="name">Gus Baamonde</span
              ><span class="email">gbaamonde@makingsense.com</span>
            </p>
          </header>
          <div class="user-plan--container m-t-18">
            <div class="user-plan--type">
              <p class="user-plan--monthly-text">
                <strong>Cuenta Gratis</strong> (500 Suscriptores)
              </p>
              <button class="user-plan close-user--menu" type="button">
                comprar
              </button>
            </div>
            <div class="user-plan--type">
              <p><strong>250</strong> Suscriptores disponibles</p>
            </div>
          </div>
          <ul class="options-user">
            <li><a href="">Panel de Control</a></li>
            <li><a href="">Centro de descargas</a></li>
            <li><a href="">Primeros pasos en Doppler</a></li>
            <li><a href="">Salir</a></li>
          </ul>
        </div>
      </div>
      <p><strong>Plan Prepago.</strong></p>
      <div class="dgsg-nav-user-menu">
        <div class="user-menu open">
          <header>
            <span class="user-avatar--menu">GB</span>
            <p>
              <span class="name">Gus Baamonde</span
              ><span class="email">gbaamonde@makingsense.com</span>
            </p>
          </header>
          <div class="user-plan--container m-t-18">
            <div class="user-plan--type">
              <p class="user-plan--monthly-text">
                <strong>Plan Prepago</strong>
              </p>
              <button class="user-plan close-user--menu" type="button">
                MEJORAR PLAN
              </button>
            </div>
            <div class="user-plan--type">
              <p><strong>99989</strong> Creditos Disponibles</p>
              <button class="user-plan close-user--menu" type="button">
                Comprar
              </button>
              <p><strong>u$s 50.60</strong> Disponible para SMS</p>
              <button class="user-plan close-user--menu" type="button">
                Cargar
              </button>
              <p class="user-plan--remaining">
                <strong>u$s 20.60</strong> Disponible para PUSH
              </p>
              <button class="user-plan close-user--menu" type="button">
                Cargar
              </button>
            </div>
          </div>
          <ul class="options-user">
            <li><a href="">Panel de Control</a></li>
            <li><a href="">Centro de descargas</a></li>
            <li><a href="">Primeros pasos en Doppler</a></li>
            <li><a href="">Salir</a></li>
          </ul>
        </div>
      </div>
      <p><strong>Plan Standard. Suscriptores</strong></p>
      <div class="dgsg-nav-user-menu">
        <div class="user-menu open">
          <header>
            <span class="user-avatar--menu">GB</span>
            <p>
              <span class="name">Gus Baamonde</span
              ><span class="email">gbaamonde@makingsense.com</span>
            </p>
          </header>
          <div class="user-plan--container m-t-18">
            <div class="user-plan--type">
              <p class="user-plan--monthly-text">
                <strong>Plan Standard</strong> (500.000 Suscriptores)
              </p>
              <button class="user-plan close-user--menu" type="button">
                MEJORAR PLAN
              </button>
            </div>
            <div class="user-plan--type">
              <p>
                <strong>495.547</strong> Suscriptores (<strong>4.654</strong>
                disponibles)
              </p>
              <p><strong>u$s 50.60</strong> Disponible para SMS</p>
              <button class="user-plan close-user--menu" type="button">
                Cargar
              </button>
              <p class="user-plan--remaining">
                <strong>u$s 20.60</strong> Disponible para PUSH
              </p>
              <button class="user-plan close-user--menu" type="button">
                Cargar
              </button>
            </div>
          </div>
          <ul class="options-user">
            <li><a href="">Panel de Control</a></li>
            <li><a href="">Centro de descargas</a></li>
            <li><a href="">Primeros pasos en Doppler</a></li>
            <li><a href="">Salir</a></li>
          </ul>
        </div>
      </div>
      <p><strong>Plan Enterprise. Suscriptores</strong></p>
      <div class="dgsg-nav-user-menu">
        <div class="user-menu open">
          <header>
            <span class="user-avatar--menu">GB</span>
            <p>
              <span class="name">Gus Baamonde</span
              ><span class="email">gbaamonde@makingsense.com</span>
            </p>
          </header>
          <div class="user-plan--container m-t-18">
            <div class="user-plan--type">
              <p class="user-plan--monthly-text">
                <strong>Plan Enterprise</strong> (15M Suscriptores)
              </p>
              <button class="user-plan close-user--menu" type="button">
                MEJORAR PLAN
              </button>
            </div>
            <div class="user-plan--type">
              <p>
                <strong>11.495.547</strong> Suscriptores (<strong
                  >434.654</strong
                >
                disponibles)
              </p>
              <p><strong>u$s 50.60</strong> Disponible para SMS</p>
              <button class="user-plan close-user--menu" type="button">
                Cargar
              </button>
              <p class="user-plan--remaining">
                <strong>u$s 20.60</strong> Disponible para PUSH
              </p>
              <button class="user-plan close-user--menu" type="button">
                Cargar
              </button>
            </div>
          </div>
          <ul class="options-user">
            <li><a href="">Panel de Control</a></li>
            <li><a href="">Centro de descargas</a></li>
            <li><a href="">Primeros pasos en Doppler</a></li>
            <li><a href="">Salir</a></li>
          </ul>
        </div>
      </div>
      <p><strong>Plan High Volume. Envíos.</strong></p>
      <div class="dgsg-nav-user-menu">
        <div class="user-menu open">
          <header>
            <span class="user-avatar--menu">GB</span>
            <p>
              <span class="name">Gus Baamonde</span
              ><span class="email">gbaamonde@makingsense.com</span>
            </p>
          </header>
          <div class="user-plan--container m-t-18">
            <div class="user-plan--type">
              <p class="user-plan--monthly-text">
                <strong>Plan High Volume</strong> (10M Envíos)
              </p>
              <button class="user-plan close-user--menu" type="button">
                MEJORAR PLAN
              </button>
            </div>
            <div class="user-plan--type">
              <p>
                <strong>20.495.547</strong> Envíos realizados (<strong
                  >10.495.547</strong
                >
                excedentes)
              </p>
              <p><strong>u$s 50.60</strong> Disponible para SMS</p>
              <button class="user-plan close-user--menu" type="button">
                Cargar
              </button>
              <p class="user-plan--remaining">
                <strong>u$s 20.60</strong> Disponible para PUSH
              </p>
              <button class="user-plan close-user--menu" type="button">
                Cargar
              </button>
            </div>
          </div>
          <ul class="options-user">
            <li><a href="">Panel de Control</a></li>
            <li><a href="">Centro de descargas</a></li>
            <li><a href="">Primeros pasos en Doppler</a></li>
            <li><a href="">Salir</a></li>
          </ul>
        </div>
      </div>
      <p><strong>Cuenta Demo.</strong></p>
      <div class="dgsg-nav-user-menu">
        <div class="user-menu open">
          <header>
            <span class="user-avatar--menu">GB</span>
            <p>
              <span class="name">Gus Baamonde</span
              ><span class="email">gbaamonde@makingsense.com</span>
            </p>
          </header>
          <div class="user-plan--container m-t-18">
            <div class="user-plan--type">
              <p class="user-plan--monthly-text">
                <strong>Cuenta Demo</strong> (500 Suscriptores)
              </p>
              <button class="user-plan close-user--menu" type="button">
                MEJORAR PLAN
              </button>
            </div>
            <div class="user-plan--type">
              <p><strong>436</strong> Suscriptores disponibles</p>
              <p><strong>u$s 50.60</strong> Disponible para SMS</p>
              <button class="user-plan close-user--menu" type="button">
                Cargar
              </button>
              <p class="user-plan--remaining">
                <strong>u$s 20.60</strong> Disponible para PUSH
              </p>
              <button class="user-plan close-user--menu" type="button">
                Cargar
              </button>
            </div>
          </div>
          <ul class="options-user">
            <li><a href="">Panel de Control</a></li>
            <li><a href="">Centro de descargas</a></li>
            <li><a href="">Primeros pasos en Doppler</a></li>
            <li><a href="">Salir</a></li>
          </ul>
        </div>
      </div>
      <p><strong>Client Manager. User</strong></p>
      <div class="dgsg-nav-user-menu">
        <div class="user-menu open">
          <header>
            <span class="user-avatar--menu">GB</span>
            <p>
              <span class="name">Gus Baamonde</span
              ><span class="email">gbaamonde@makingsense.com</span>
            </p>
          </header>
          <div class="user-plan--container m-t-18">
            <div class="user-plan--type">
              <p class="user-plan--monthly-text">Envío de Emails</p>
              <p class="user-plan-enabled">HABILITADO</p>
              <p>Envío de SMS</p>
              <button class="user-plan close-user--menu" type="button">
                SOLICITAR
              </button>
            </div>
          </div>
          <ul class="options-user">
            <li><a href="">Panel de Control</a></li>
            <li><a href="">Centro de descargas</a></li>
            <li><a href="">Primeros pasos en Doppler</a></li>
            <li><a href="">Salir</a></li>
          </ul>
        </div>
      </div>
      <p><strong>Client Manager. Profile</strong></p>
      <div class="dgsg-nav-user-menu">
        <div class="user-menu open">
          <header>
            <span class="user-avatar--menu">GB</span>
            <p>
              <span class="name">Gus Baamonde</span
              ><span class="email">gbaamonde@makingsense.com</span>
            </p>
          </header>
          <div class="user-plan--container m-t-18">
            <p class="user-plan--monthly-text">
              Perfil: <strong>Manuel Di Rago</strong>
            </p>
          </div>
          <ul class="options-user">
            <li><a href="">Panel de Control</a></li>
            <li><a href="">Centro de descargas</a></li>
            <li><a href="">Primeros pasos en Doppler</a></li>
            <li><a href="">Salir</a></li>
          </ul>
        </div>
      </div>
    </article>
  `;
};
