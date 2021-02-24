import "./style.scss";
import CommonComponent from "../CommonComponent";

interface IConfig {
  size?: 0 | 1 | 2 | 3;
}

export default class BarClass extends CommonComponent {
  constructor(private cfg?: IConfig) {
    super();

    switch (this.cfg?.size) {
      case 1:
        this.addClass("mesh-tile--size-1");
        break;
      case 2:
        this.addClass("mesh-tile--size-2");
        break;
      case 3:
        this.addClass("mesh-tile--size-3");
        break;

      default:
        this.addClass("mesh-tile--size-0");
        break;
    }
  }

  render() {
    return `
    <div class="mesh-tile ${this.getClasses()}">
    </div>
    `;
  }
}
