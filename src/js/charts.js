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
    const barChart = bb.generate({
      bindto: "#barChart",
      data: {
        columns: [["data1", 27, 16, 7, 30]],
        type: bar(),
      },
      padding: {
        bottom: 80,
      },
      axis: {
        rotated: true,
      },
    });
    return lineChart;
  }
  return null;
}
export const lineChart = generateLineChart();
export const barChart = generateBarChart();
