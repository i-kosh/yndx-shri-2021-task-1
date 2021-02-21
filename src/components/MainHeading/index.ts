import "./style.scss";
import CommonComponent from "../CommonComponent";

interface Conf {
  title: string;
  subtitle?: string;
}

export default class MainHeadingClass extends CommonComponent {
  constructor(private cfg: Conf) {
    super();
  }

  render() {
    const title = `<h1 class="heading__text headline">${this.cfg.title}</h1>`;
    const subtitle = this.cfg.subtitle
      ? `<p class="heading__sub body">${this.cfg.subtitle}</p>`
      : "";

    return `
      <div class="heading">
        ${title}
        ${subtitle}
      </div>
    `;
  }
}
