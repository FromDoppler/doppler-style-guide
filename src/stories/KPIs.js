import { html } from "lit-html";

const defaultKpis = [
  {
    icon: "iconapp-persons",
    value: "0",
    label: "Visitas únicas",
  },
  {
    icon: "iconapp-web-development",
    value: "2",
    label: "Widgets activos",
  },
  {
    icon: "iconapp-web-eye",
    value: "238",
    label: "Impresiones",
  },
  {
    icon: "iconapp-finger-tap",
    value: "21",
    label: "Clics",
  },
  {
    icon: "iconapp-click",
    value: "0.09",
    label: "CTR",
  },
];

export const kpiColorOptions = {
  default: "",
  green: "dp-color-green",
  grey: "dp-color-grey",
  brown: "dp-color-brown",
  purple: "dp-color-purple",
};

const getStyleValue = (value) => (value && value !== "default" ? value : "");

const getColorClassName = (value) => kpiColorOptions[value] || "";

const getTypographyStyles = ({ fontFamily, fontWeight, fontStyle }) =>
  [
    getStyleValue(fontFamily) ? `font-family: ${fontFamily}` : "",
    getStyleValue(fontWeight) ? `font-weight: ${fontWeight}` : "",
    getStyleValue(fontStyle) ? `font-style: ${fontStyle}` : "",
  ]
    .filter(Boolean)
    .join("; ");

/**
 * KPI cards used by Popuphub dashboards.
 */
export const KPIs = ({
  items = defaultKpis,
  iconColor,
  textColor,
  fontFamily,
  fontWeight,
  fontStyle,
}) => {
  const textStyles = getTypographyStyles({
    fontFamily,
    fontWeight,
    fontStyle,
  });
  const textColorClassName = getColorClassName(textColor);
  const iconColorClassName = getColorClassName(iconColor);

  return html`
    <section class="dp-library">
      <div class="dp-wrapper-as-kpi">
        <ul>
          ${items.map(
            ({ icon, value, label }) => html`
              <li>
                <div class="dp-kpi-card dp-white">
                  <span
                    class=${`dp-assisted-sales-icon dpicon ${icon} ${iconColorClassName}`}
                  ></span>
                  <div class="dp-assisted-sales-text">
                    <h3 class=${textColorClassName} style=${textStyles}>
                      ${value}
                    </h3>
                    <span class=${textColorClassName} style=${textStyles}
                      >${label}</span
                    >
                  </div>
                </div>
              </li>
            `,
          )}
        </ul>
      </div>
    </section>
  `;
};

export const defaultKpiItems = defaultKpis;
