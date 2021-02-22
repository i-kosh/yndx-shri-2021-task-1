import "./style.scss";
import CommonComponent from "../CommonComponent";

interface IConfig {
  aboweSlot?: string;
  underSlot?: string;
  topSlot?: string;
  bottomSlot?: string;
  small?: boolean;
  aboweSlotAlign?: "left" | "right";
  accent?: boolean;
  height?: number;
  order?: number;
}

export default class BarClass extends CommonComponent {
  constructor(private cfg?: IConfig) {
    super();
  }

  render() {
    if (this.cfg?.accent) this.addClass("bar--accent");
    if (this.cfg?.underSlot) this.addClass("bar--shaped");
    if (this.cfg?.small) this.addClass("bar--small");
    if (this.cfg?.aboweSlotAlign === "left") this.addClass("bar--align-left");
    if (this.cfg?.aboweSlotAlign === "right") this.addClass("bar--align-right");

    const barTop = this.cfg?.topSlot
      ? `<div class="bar__top headline">${this.cfg.topSlot}</div>`
      : "";
    const barAbowe = this.cfg?.aboweSlot
      ? `<div class="bar__abowe subhead">${this.cfg.aboweSlot}</div>`
      : "";
    const barBottom = this.cfg?.bottomSlot
      ? `<div class="bar__bottom">${this.cfg.bottomSlot}</div>`
      : "";
    const barUnder = this.cfg?.underSlot
      ? `<div class="bar__under body">${this.cfg.underSlot}</div>`
      : "";

    const styleHeightVar = `--height: ${this.cfg?.height ?? 100}%;`;

    return `
    <div class="bar ${this.getClasses()}" style="${styleHeightVar}">
      ${barAbowe}
      <div class="bar__content">
        ${barTop}
        ${barBottom}
      </div>
      ${barUnder}
    </div>
    `;
  }
}
