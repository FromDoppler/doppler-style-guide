import { html } from "lit-html";

/**
 * Primary UI component for user interaction
 */
export const WidgetPlanProgress = ({ percentage }) => {
  return html`
    <div class="dp-widget-plan-progress">
      <p>Plan: <strong>20.000 Impresiones</strong></p>
      <div class="dp-progress-bar m-t-12 m-b-12">
        <div
          id="progress"
          class="progress ${percentage == 100 ? "exceeded" : ""}"
          style="width:${percentage}%"
        ></div>
      </div>
      <p class="plan-info">
        <span>Consumidas: <strong>10.000 Impresiones</strong></span>
        <span
          >Disponibles:
          <strong class="${percentage == 100 ? "text-orange" : "text-green"} "
            >20.000 Impresiones</strong
          ></span
        >
      </p>
    </div>
  `;
};
