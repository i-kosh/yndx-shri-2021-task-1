import "./style.scss";
import CommonComponent from "../CommonComponent";
import Bar from "../BarLadderItem";
import UserCard from "../UserCard";

interface ICfg {
  bars: {
    userName: string;
    userSub: string;
    userAvatar: string;
    userMark?: string;
    accent?: boolean;
    place: number;
  }[];
  selectedUserIndex?: number;
}

export default class BarLadderClass extends CommonComponent {
  constructor(private cfg: ICfg) {
    super();
  }

  render() {
    let sortFlag = 1;

    const selectedUserBar =
      this.cfg.selectedUserIndex && this.cfg.selectedUserIndex > 2
        ? this.cfg.bars[this.cfg.selectedUserIndex]
        : undefined;
    const selectedUserCard = selectedUserBar
      ? `${new UserCard({
          avatar: selectedUserBar.userAvatar,
          name: selectedUserBar.userName,
          sub: selectedUserBar.userSub,
          mark: selectedUserBar.userMark,
          nonInteractive: true,
        }).pushClasses(["ladder__selected-user"])}`
      : null;
    const selectedUserContent = `
    <div class="ladder__selected">
        ${selectedUserCard}
        <div class="divider divider--small divider--black divider--no-opacity ladder__selected-divider"></div>
        <span class="headline ladder__selected-headline">${selectedUserBar?.place}</span>
    </div>
    `;

    const bars = this.cfg.bars.map((bar, index) => {
      sortFlag = sortFlag * -1;
      if (index > 4) return "";

      if (
        this.cfg.selectedUserIndex &&
        this.cfg.selectedUserIndex > 4 &&
        index === 4
      ) {
        bar = this.cfg.bars[this.cfg.selectedUserIndex];
      }

      return new Bar({
        avatar: bar.userAvatar,
        name: bar.userName,
        sub: bar.userSub,
        topSlot: `${bar.place}`,
        accent: bar.accent,
        mark: bar.userMark,
        order: index * sortFlag,
        bottomSlot:
          selectedUserCard && index === 0
            ? `${selectedUserContent}`
            : undefined,
      }).pushClasses(["ladder__bar"]);
    });

    const barsString = bars
      .reverse()
      .map((bar) => `${bar}`)
      .join("");

    return `
    <div class="ladder ${this.getClasses()}">
      ${barsString}
    </div>
    `;
  }
}
