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
}

export default class BarClass extends CommonComponent {
  template;

  constructor(cfg?: IConfig) {
    super();
    if (cfg?.accent) this.addClass("bar--accent");
    if (cfg?.underSlot) this.addClass("bar--shaped");
    if (cfg?.small) this.addClass("bar--small");
    if (cfg?.aboweSlotAlign === "left") this.addClass("bar--align-left");
    if (cfg?.aboweSlotAlign === "right") this.addClass("bar--align-right");

    const barTop = cfg?.topSlot
      ? `<div class="bar__top headline">${cfg.topSlot}</div>`
      : "";
    const barAbowe = cfg?.aboweSlot
      ? `<div class="bar__abowe subhead">${cfg.aboweSlot}</div>`
      : "";
    const barBottom = cfg?.bottomSlot
      ? `<div class="bar__bottom">${cfg.bottomSlot}</div>`
      : "";
    const barUnder = cfg?.underSlot
      ? `<div class="bar__under body">${cfg.underSlot}</div>`
      : "";

    this.template = `
    <div class="bar ${this.getClasses()}" style="--height: ${
      cfg?.height || 0
    }%;">
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
