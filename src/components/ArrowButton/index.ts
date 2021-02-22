import "./style.scss";
import CommonComponent from "../CommonComponent";
const buttonSvg = require("./Button.svg?raw") as string;

interface IConfig {
  direction: "up" | "down" | "left" | "right";
  disabled?: boolean;
}

export default class BarClass extends CommonComponent {
  constructor(private cfg?: IConfig) {
    super();
  }

  render() {
    switch (this.cfg?.direction) {
      case "up":
        this.addClass("arrow-btn--up");
        break;
      case "left":
        this.addClass("arrow-btn--left");
        break;
      case "right":
        this.addClass("arrow-btn--right");
        break;
    }

    return `
    <button type="button" ${
      this.cfg?.disabled ? "disabled" : ""
    } class="arrow-btn ${this.getClasses()}">
      ${buttonSvg}
    </button>
    `;
  }
}
