import "./style.scss";
import CommonComponent from "../CommonComponent";
import UserCard from "../UserCard";
import ArrowButton from "../ArrowButton";

interface ICfg {
  users: {
    name: string;
    avatar: string;
  }[];
  selectedUserIndex?: number;
}

export default class BarLadderClass extends CommonComponent {
  constructor(private cfg: ICfg) {
    super();
  }

  render() {
    const users = this.cfg.users.reduce((accum, user, index) => {
      if (index > 7) return accum;

      const isSelected = index === this.cfg.selectedUserIndex;

      return (
        accum +
        `<div class="vote__user">
          ${new UserCard({
            avatar: user.avatar,
            name: user.name,
            mark: isSelected ? "👍" : "",
            permanentActive: isSelected,
          })}
        </div>`
      );
    }, "");

    return `
    <div class="vote ${this.getClasses()}">
      <div class="vote__content">
        ${users}
        ${new ArrowButton({ direction: "up" }).pushClasses([
          "vote__up",
          "vote__btn",
        ])}
        ${new ArrowButton({ direction: "down" }).pushClasses([
          "vote__down",
          "vote__btn",
        ])}
      </div>
    </div>
    `;
  }
}
