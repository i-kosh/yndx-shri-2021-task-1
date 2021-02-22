import "./style.scss";
import CommonComponent from "../CommonComponent";

interface Conf {
  avatar: string;
  avatar2x?: string;
  name: string;
  sub?: string;
  mark?: string;
  nonInteractive?: boolean;
  permanentActive?: boolean;
}

export default class UserCard extends CommonComponent {
  constructor(private cfg: Conf) {
    super();
  }

  render() {
    if (this.cfg.nonInteractive) this.addClass("user--noninteractive");
    if (this.cfg.permanentActive) this.addClass("user--active");

    const markElem = this.cfg.mark
      ? `<div class="user__mark">${this.cfg.mark}</div>`
      : "";

    return `
    <div class="user ${this.getClasses()}">
      <div class="user__avatar">
        ${markElem}
        <img class="user__img"
          src="${this.cfg.avatar}"
          ${this.cfg.avatar2x ? `srcset="${this.cfg.avatar2x}"` : ""}
          alt="${this.cfg.name}">
      </div>
      <p class="user__text">
        <span class="user__name body">${this.cfg.name}</span>
        ${
          this.cfg.sub
            ? `<span class="user__sub caption">${this.cfg.sub}</span>`
            : ""
        }
      </p>
    </div>
    `;
  }
}
