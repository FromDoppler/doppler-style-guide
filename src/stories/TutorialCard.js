import { html } from "lit-html";

import tutorialCardImage from "../assets/img/sample01.jpg";
import { Pill } from "./Pill";

export const TutorialCard = ({
  pillText = "Email Automation",
  title = "Cómo crear un Automation de Pago Confirmado",
  author = "Virginia Garay",
  showPlayIcon = true,
}) => {
  return html`
    <article class="dp-tutorial-card">
      <div
        class=${`dp-tutorial-card__media ${
          showPlayIcon ? "" : "dp-tutorial-card__media--without-overlay"
        }`}
      >
        <img
          class="dp-tutorial-card__image"
          src=${tutorialCardImage}
          alt=${title}
        />
        ${showPlayIcon
          ? html`<span
              class="dp-tutorial-card__play"
              aria-hidden="true"
            ></span>`
          : ""}
      </div>

      <div class="dp-tutorial-card__body">
        ${Pill({
          text: pillText,
          removable: false,
          expandable: true,
          color: "blue",
        })}
        <h3 class="dp-tutorial-card__title">${title}</h3>
        <p class="dp-tutorial-card__author">Por ${author}</p>
      </div>
    </article>
  `;
};
