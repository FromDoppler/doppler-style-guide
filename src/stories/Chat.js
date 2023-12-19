import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const Chat = ({}) => {
  return html`
    <div class="dp-iframe">
      <div data-testid="Layout" class="wrapper-llm-chat">
        <header class="dp-header-chat">
          <ul class="dp-nav-chat">
            <li>
              <button type="button" class="dp-icon-close"></button>
            </li>
          </ul>
        </header>
        <div data-testid="CollectionPage" class="dp-chat">
          <div class="message-history open-chat">
            <div class="message message-ai">
              <p>Bienvenido, soy SebAI de Doppler, ¿Cómo puedo ayudarte?</p>
            </div>
            <div class="message message-human">
              <p>tenes planes?</p>
            </div>
            <div class="message message-ai">
              <p>
                ¡Claro que sí! En Doppler ofrecemos dos tipos de planes para tus
                campañas de email marketing.
              </p>
              <ol>
                <li>
                  <p>
                    <strong>Plan Individual</strong>: Este plan te permite
                    comprar créditos (emails) en cualquier momento y se van
                    descontando a medida que realices envíos. Es recomendado
                    para empresas o usuarios que envían campañas ocasionalmente.
                    Los créditos adquiridos no tienen vencimiento y son
                    acumulativos. Puedes ver los paquetes disponibles
                    <a
                      href="https://blog.fromdoppler.com/wp-content/uploads/20120118_545X135_support_1.png"
                      >aquí</a
                    >.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Plan Mensual</strong>: Este plan te brinda una
                    cantidad fija de emails por mes y se recomienda para
                    clientes que realizan envíos frecuentes o regulares. Los
                    emails del plan vencen al finalizar el mes. Puedes ver los
                    paquetes disponibles
                    <a
                      href="https://blog.fromdoppler.com/wp-content/uploads/20120118_545X135_support_2.png"
                      >aquí</a
                    >.
                  </p>
                </li>
              </ol>
              <p>
                Si necesitas más información, no dudes en ponerte en contacto
                con nosotros
                <a
                  href="/cdn-cgi/l/email-protection#be9ed7d0d8d1fed8ccd1d3dad1ceced2dbcc90ddd1d3"
                  >aquí</a
                >. ¡Estamos aquí para ayudarte!
              </p>
              <p>
                <strong>Relacionado:</strong>
                <a href="https://www.fromdoppler.com/es/precios/"
                  >🔗Planes y soluciones a tu medida</a
                >
                |
                <a
                  href="https://blog.fromdoppler.com/%c2%bfconoces-nuestros-planes-de-email-marketing/"
                  >🔗¿Conoces nuestros planes de Email Marketing?</a
                >
                |
                <a
                  href="https://help.fromdoppler.com/es/diferencias-planes-por-contactos-planes-por-creditos/"
                  >🔗¿Cuál es la diferencia entre los Planes por Contactos y los
                  Planes por Créditos?</a
                >
              </p>
            </div>
            <div class="message message-human">
              <p>y tenes mas alternativas?</p>
            </div>
            <div class="message-history closed-chat">
              <div class="message message-ai">
                <p>Bienvenido, soy SebAI de Doppler, ¿Cómo puedo ayudarte?</p>
              </div>
              <div class="message message-human">
                <p>hola</p>
              </div>
              <div class="message message-ai">
                <p>Hola, ¿en qué puedo ayudarte hoy?</p>
              </div>
            </div>
            <div class="message message-waiting">. . .</div>
          </div>
        </div>
        <footer class="dp-footer-chat">
          <div class="">
            <form class="new-message">
              <textarea
                name=""
                area-label="mensajes"
                id="#"
                rows="1"
                placeholder="Tu consulta..."
              ></textarea>
              <button
                type="submit"
                class="dp-send-messages"
                value="enviar"
                disabled
              ></button>
            </form>
          </div>
        </footer>
      </div>
    </div>
  `;
};
