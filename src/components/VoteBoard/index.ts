import "./style.scss";
import CommonComponent from "../CommonComponent";
import UserCard from "../UserCard";
import ArrowButton from "../ArrowButton";
import { clamp } from "lodash-es";

interface ICfg {
  users: {
    name: string;
    avatar: string;
    id: number;
  }[];
  selectedUserIndex?: number;
  startUserIndex?: number;
}

export default class BarLadderClass extends CommonComponent {
  constructor(private cfg: ICfg) {
    super();
  }

  render() {
    const MAX_DISPALY_USERS_LANDSCAPE = 6;
    const MAX_DISPALY_USERS_PORTRAIT = 8;
    const maxUsers = matchMedia("(orientation: landscape)").matches
      ? MAX_DISPALY_USERS_LANDSCAPE
      : MAX_DISPALY_USERS_PORTRAIT;

    const usersCount = this.cfg.users.length;
    const lastUserIndex = usersCount - 1;
    const offset = clamp(
      this.cfg.startUserIndex || 0,
      0,
      clamp(lastUserIndex, 0, lastUserIndex)
    );

    const itHasPrevUsers = offset > 0;
    const itHasNextUsers = offset + maxUsers - 1 < lastUserIndex;

    const users = this.cfg.users.reduce((accum, user, index) => {
      if (index < offset) {
        return accum;
      }

      const isSelected = index === this.cfg.selectedUserIndex;

      return (
        accum +
        `<div class="vote__user">
          ${new UserCard({
            avatar: user.avatar,
            name: user.name,
            mark: isSelected ? "👍" : "",
            permanentActive: isSelected,
            action: "update",
            actionParams: {
              alias: "leaders",
              data: {
                selectedUserId: user.id,
              },
            },
          })}
        </div>`
      );
    }, "");

    return `
    <div class="vote ${this.getClasses()}">
      <div class="vote__content">
        ${users}
        ${new ArrowButton({
          direction: "up",
          action: "update",
          actionParams: {
            alias: "vote",
            data: {
              offset: 0,
            },
          },
          disabled: !itHasPrevUsers,
        }).pushClasses(["vote__up", "vote__btn"])}
        ${new ArrowButton({
          direction: "down",
          action: "update",
          actionParams: {
            alias: "vote",
            data: {
              offset: maxUsers,
            },
          },
          disabled: !itHasNextUsers,
        }).pushClasses(["vote__down", "vote__btn"])}
      </div>
    </div>
    `;
  }
}
