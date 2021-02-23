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
  action?: "update";
  actionParams?: {
    alias: string;
    data: Record<string, any>;
  };
  horizontal?: boolean;
}

export default class UserCard extends CommonComponent {
  constructor(private cfg: Conf) {
    super();
  }

  render() {
    if (this.cfg.nonInteractive) this.addClass("user--noninteractive");
    if (this.cfg.permanentActive) this.addClass("user--active");
    if (this.cfg.horizontal) this.addClass("user--horizontal");

    const markElem = this.cfg.mark
      ? `<div class="user__mark">${this.cfg.mark}</div>`
      : "";

    let dataAction = "",
      dataParams = "";
    if (this.cfg.action && this.cfg.actionParams) {
      dataAction = `data-action="${this.cfg.action}"`;
      dataParams = `data-params='${JSON.stringify(this.cfg.actionParams)}'`;
    }

    return `
    <div class="user ${this.getClasses()}" ${dataAction} ${dataParams}>
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
