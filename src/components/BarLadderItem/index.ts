import CommonComponent from "../CommonComponent";
import Bar from "../Bar";
import UserCard from "../UserCard";

interface ICfg {
  avatar: string;
  name: string;
  sub: string;
  mark?: string;
  topSlot: string;
  bottomSlot?: string;
  accent?: boolean;
  order?: number;
}

export default class BarLadderItemClass extends CommonComponent {
  constructor(private cfg: ICfg) {
    super();
  }

  render() {
    const styleOrder =
      this.cfg?.order != null ? `order: ${this.cfg.order};` : "";

    const styleZindex =
      this.cfg?.order != null
        ? `z-index: ${10 - Math.abs(this.cfg.order)};`
        : "";

    const user = new UserCard({
      avatar: this.cfg.avatar,
      name: this.cfg.name,
      sub: this.cfg.sub,
      mark: this.cfg.mark,
      nonInteractive: true,
    });
    const bar = new Bar({
      topSlot: this.cfg.topSlot,
      bottomSlot: this.cfg.bottomSlot,
      aboweSlot: `${user}`,
      accent: this.cfg.accent,
      aboweSlotAlign:
        this.cfg.order && this.cfg.order < 0
          ? "left"
          : this.cfg.order && this.cfg.order > 0
          ? "right"
          : undefined,
      order: this.cfg.order,
    });

    return `
    <div class="ladder-bar-item ${this.getClasses()}" style="${styleOrder} ${styleZindex}">
      ${bar}
    </div>
    `;
  }
}
