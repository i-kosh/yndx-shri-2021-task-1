import "./style.scss";
import CommonComponent from "../CommonComponent";
import { sum } from "lodash";
import { getDiagramColor } from "../helpers/getDiagramColor";

interface IPieCfg {
  values: number[];
  title: string;
  sub: string;
}

export default class PieChart extends CommonComponent {
  constructor(private cfg?: IPieCfg) {
    super();
  }

  private createPie() {
    if (!this.cfg) return "";

    const GAP = 1; // deg
    const INNER_CIRCLE_SIZE_COEF = 0.7;
    const WIDTH = 500;
    const HEIGTH = 500;
    const DEFAULT_ROTATE = -90;

    const cx = WIDTH / 2;
    const cy = HEIGTH / 2;
    const outerR = WIDTH / 2;
    const innerR = outerR * INNER_CIRCLE_SIZE_COEF;
    const strokeWidth = outerR - innerR;
    const realR = innerR + strokeWidth / 2;
    const circumference = 2 * realR * Math.PI;
    const gap = circumference * (GAP / 360);

    const valuesSum = sum(this.cfg.values);

    let lastSliceEndDeg = 0;
    const slices = this.cfg.values.reduce((accum, val, index) => {
      const percent = (val / valuesSum) * 100;
      const strokeLength = (circumference / 100) * percent - gap;

      const deg = (360 / 100) * percent;
      let rotateDeg: number;
      if (index === 0) {
        rotateDeg = DEFAULT_ROTATE + (deg / 2) * -1 + GAP / 2;
        lastSliceEndDeg += deg / 2;
      } else {
        rotateDeg = DEFAULT_ROTATE + lastSliceEndDeg + GAP / 2;
        lastSliceEndDeg += deg;
      }

      return `${accum}
        <circle
          class="${getDiagramColor(index + 1).diagramSliceClass}"
          cx="${cx}"
          cy="${cy}"
          r="${realR}"
          stroke-linecap="butt"
          stroke-width="${strokeWidth}"
          stroke-dasharray="${strokeLength},${circumference}"
          fill="transparent"
          transform="rotate(${rotateDeg}, ${cx}, ${cy})"
        />
      `;
    }, "");

    return `
    <svg width="25" height="25" viewBox="0,0,${WIDTH},${HEIGTH}">
      ${slices}

      <defs>
        <radialGradient cx="50%" cy="50%" r="50%" id="pie-chart-gradient-4" gradientUnits="userSpaceOnUse">
          <stop offset="0.72" stop-color="rgba(77, 77, 77, 0.5)"/>
          <stop offset="1" stop-color="rgba(56, 41, 0, 0.5)"/>
        </radialGradient>

        <radialGradient cx="50%" cy="50%" r="50%" id="pie-chart-gradient-3" gradientUnits="userSpaceOnUse">
          <stop offset="0.72" stop-color="rgba(155, 155, 155, 0.5)"/>
          <stop offset="1" stop-color="rgba(56, 41, 0, 0.5)"/>
        </radialGradient>

        <radialGradient cx="50%" cy="50%" r="50%" id="pie-chart-gradient-2" gradientUnits="userSpaceOnUse">
          <stop offset="0.72" stop-color="rgba(99, 63, 0, 0.5)"/>
          <stop offset="1" stop-color="rgba(15, 9, 0, 0.5)"/>
        </radialGradient>

        <radialGradient cx="50%" cy="50%" r="50%" id="pie-chart-gradient-1" gradientUnits="userSpaceOnUse">
          <stop offset="0.72" stop-color="rgba(255, 163, 0, 0.8)"/>
          <stop offset="1" stop-color="rgba(91, 58, 0, 0.8)"/>
        </radialGradient>

        <radialGradient cx="50%" cy="50%" r="50%" id="pie-chart-gradient-4-light" gradientUnits="userSpaceOnUse">
          <stop offset="0.82" stop-color="rgba(191, 191, 191, 0.6)"/>
          <stop offset="0.92" stop-color="rgba(228, 228, 228, 0.2)"/>
          <stop offset="1" stop-color="rgba(191, 191, 191, 0.35)"/>
        </radialGradient>

        <radialGradient cx="50%" cy="50%" r="50%" id="pie-chart-gradient-3-light" gradientUnits="userSpaceOnUse">
          <stop offset="0.82" stop-color="rgba(166, 166, 166, 0.3)"/>
          <stop offset="0.92" stop-color="rgba(203, 203, 203, 0.1)"/>
          <stop offset="1" stop-color="rgba(166, 166, 166, 0.15)"/>
        </radialGradient>

        <radialGradient cx="50%" cy="50%" r="50%" id="pie-chart-gradient-2-light" gradientUnits="userSpaceOnUse">
          <stop offset="0.82" stop-color="rgba(255, 184, 0, 0.34)"/>
          <stop offset="0.92" stop-color="rgba(255, 239, 153, 0.22)"/>
          <stop offset="1" stop-color="rgba(255, 184, 0, 0.34)"/>
        </radialGradient>

        <radialGradient cx="50%" cy="50%" r="50%" id="pie-chart-gradient-1-light" gradientUnits="userSpaceOnUse">
          <stop offset="0.82" stop-color="rgba(255, 184, 0, 0.56)"/>
          <stop offset="0.92" stop-color="rgba(255, 239, 153, 0.32)"/>
          <stop offset="1" stop-color="rgba(255, 184, 0, 0.56)"/>
        </radialGradient>
      </defs>
    </svg>
    `;
  }

  render() {
    return `
      <div class="pie ${this.getClasses()}">
        ${this.createPie()}

        <p class="pie__text-content">
          <span class="pie__title">
            ${this.cfg?.title || ""}
          </span>
          <span class="pie__subtitile">
            ${this.cfg?.sub || ""}
          </span>
        </p>
      </div>
    `;
  }
}
