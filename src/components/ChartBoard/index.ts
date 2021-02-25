import "./style.scss";
import CommonComponent from "../CommonComponent";
import Chart from "../Chart";
import UserCard from "../../components/UserCard";

interface ICfg {
  values?: {
    title: string;
    value: number;
    active?: boolean;
  }[];
  users?: {
    avatar: string;
    name: string;
    valueText: string;
  }[];
}

export default class ChartBoardClass extends CommonComponent {
  constructor(private cfg: ICfg) {
    super();
  }

  render() {
    const MAX_USERS = 2;
    const users =
      this.cfg.users?.reduce((accum, user, index) => {
        if (index + 1 > MAX_USERS) return accum;

        const userCard = new UserCard({
          avatar: user.avatar,
          name: user.name,
          sub: user.valueText,
          nonInteractive: true,
          horizontal: true,
        });

        const divider =
          this.cfg.users?.[index + 1] && index > 0
            ? '<div class="divider divider--vertical-only-landscape"></div>'
            : "";

        return `${accum} ${divider} ${userCard}`;
      }, "") || "";

    return `
    <div class="chart-board ${this.getClasses()}">
      <div class="chart-board__chart-wrap">
        ${new Chart({
          values: this.cfg.values || [],
        }).pushClasses(["chart-board__chart"])}
      </div>
      <div class="chart-board__leaders">
        ${users}
      </div>
    </div>
    `;
  }
}
