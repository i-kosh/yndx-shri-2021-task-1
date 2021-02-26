import "./style.scss";
import CommonComponent from "../CommonComponent";
import { getDiagramColor } from "../helpers/getDiagramColor";

interface IDiagramLegendCfg {
  values: {
    value: string | number;
    diff: string | number;
    title: string;
  }[];
}

export default class DiagramLegend extends CommonComponent {
  constructor(private cfg?: IDiagramLegendCfg) {
    super();
  }

  render() {
    const items =
      this.cfg?.values.reduce((accum, val, index) => {
        return `${accum}
        <div class="diagram-legend__item dlitem">
          <div class="dlitem__bullet ${
            getDiagramColor(index + 1).dotPreviewClass
          }"></div>
          <span class="dlitem__title">${val.title}</span>
          <p class="dlitem__summary">
            <span class="dlitem__summary-item dlitem__diff">
              ${val.diff}
            </span>
            <span class="dlitem__summary-item dlitem__value">
              ${val.value}
            </span>
          </p>
        </div>

        ${this.cfg?.values[index + 1] ? `<div class="divider"></div>` : ""}
      `;
      }, "") || "";

    return `
      <div class="diagram-legend ${this.getClasses()}">
        ${items}
      </div>
    `;
  }
}
