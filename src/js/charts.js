import bb, { line, bar } from "billboard.js";
import "billboard.js/dist/billboard.css";

function generateLineChart() {
  if (document.getElementById("lineChart")) {
    const lineChart = bb.generate({
      bindto: "#lineChart",
      data: {
        x: "x",
        columns: [
          [
            "x",
            "05-02-2025",
            "06-02-2025",
            "07-02-2025",
            "08-02-2025",
            "09-02-2025",
          ], // Dates
          ["Pop-up Promocional", 35, 5, 35, 10, 7],
          ["Pop-up Suscripción", 0, 0, 5, 8, 4],
          ["Pop-up Productos populares", 28, 10, 28, 6, 5],
        ],
        type: line(),
      },
      line: {
        width: 3,
      },
      padding: {
        bottom: 60,
      },
      axis: {
        x: {
          type: "timeseries",
          tick: {
            format: "%d-%m-%Y",
            text: {
              inner: {
                first: true,
                last: true,
              },
            },
          },
        },
      },
      tooltip: {
        contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
          let tooltipHTML = `<div class="bb-tooltip-custom">
                              <div class="bb-tooltip-title">
                                Fecha: ${defaultTitleFormat(d[0].x)}
                              </div>`;

          d.forEach((item) => {
            tooltipHTML += `<div class="bb-tooltip-item">
                            <span class="bb-tooltip-marker" style="background-color:${color(item)}"></span>
                            ${item.name}: ${defaultValueFormat(item.value)}
                            </div>`;
          });

          tooltipHTML += `</div>`;
          return tooltipHTML;
        },
      },
      point: {
        show: true,
      },
      legend: {
        padding: 20,
        item: {
          tile: {
            width: 16,
            height: 16,
          },
        },
      },
    });
    return lineChart;
  }
  return null;
}

function generateBarChart() {
  if (document.getElementById("barChart")) {
    const chart = bb.generate({
      bindto: "#barChart",
      data: {
        x: "x",
        columns: [
          [
            "x",
            "WhatsApp",
            "Subscripcion Newsletter",
            "Black Friday",
            "Promocion 20% OFF",
          ],
          ["Pop-up WhatsApp", 28, 0, 0, 0],
          ["Pop-up Suscripción", 0, 16, 0, 0],
          ["Pop-up Promocional", 0, 0, 8, 30],
        ],
        type: bar(),
        groups: [
          ["Pop-up WhatsApp", "Pop-up Suscripción", "Pop-up Promocional"],
        ],
      },
      bar: {
        width: {
          ratio: 0.5,
        },
      },
      axis: {
        rotated: true,
        x: {
          type: "category",
        },
      },
      legend: {
        position: "bottom",
        padding: 20,
        item: {
          tile: {
            width: 16,
            height: 16,
          },
        },
      },
      tooltip: {
        grouped: false,
        contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
          let tooltipHTML = `<div class="bb-tooltip-custom">
                              <div class="bb-tooltip-title">
                                Nombre: ${defaultTitleFormat(d[0].x)}
                              </div>`;

          d.forEach((item) => {
            tooltipHTML += `<div class="bb-tooltip-item">
                            <span class="bb-tooltip-marker" style="background-color:${color(item)}"></span>
                            ${item.name}: ${defaultValueFormat(item.value)}
                            </div>`;
          });

          tooltipHTML += `</div>`;
          return tooltipHTML;
        },
      },
      padding: {
        bottom: 60,
        top: 10,
      },
    });

    return lineChart;
  }
  return null;
}
export const lineChart = generateLineChart();
export const barChart = generateBarChart();
