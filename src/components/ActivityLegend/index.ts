import "./style.scss";
import CommonComponent from "../CommonComponent";

export default class BarClass extends CommonComponent {
  constructor() {
    super();
  }

  render() {
    return `
    <div class="legend ${this.getClasses()}">
      <div class="legend__item">
        <span class="legend__item-block"></span>
        <span class="legend__item-text legend__item-text--1hour body">
          1 час
        </span>
        <span class="legend__item-text legend__item-text--2hours body">
          2 часа
        </span>
      </div>
      <div class="legend__item">
        <span class="legend__item-block"></span>
        <span class="legend__item-text body">0</span>
      </div>
      <div class="legend__item">
        <span class="legend__item-block"></span>
        <span class="legend__item-text body">1 — 2</span>
      </div>
      <div class="legend__item">
        <span class="legend__item-block"></span>
        <span class="legend__item-text body">3 — 4</span>
      </div>
      <div class="legend__item">
        <span class="legend__item-block"></span>
        <span class="legend__item-text body">5 — 6</span>
      </div>
    </div>
    `;
  }
}
