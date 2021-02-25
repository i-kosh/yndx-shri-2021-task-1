import "./style.scss";
import Common from "../CommonView";
import Container from "../../components/Container";
import MainHeading from "../../components/MainHeading";
import BarLadder from "../../components/BarLadder";

interface LeadersSlide {
  emoji: string;
  subtitle: string;
  title: string;
  selectedUserId: number;
  users: {
    id: number;
    name: string;
    avatar: string;
    valueText: string;
  }[];
}

export default class Leaders extends Common {
  constructor(private data: Partial<LeadersSlide>) {
    super();
  }

  render() {
    const heading = new MainHeading({
      title: this.data.title || "",
      subtitle: this.data.subtitle,
    });

    const barLadder = new BarLadder({
      bars:
        this.data.users?.map((user, index) => {
          const userPlace = index + 1;
          const userMark =
            userPlace === 1
              ? this.data.emoji
              : this.data.selectedUserId === user.id
              ? "👍"
              : "";

          return {
            userAvatar: user.avatar,
            userName: user.name,
            userSub: user.valueText,
            place: userPlace,
            accent: userPlace === 1,
            userMark,
          };
        }) || [],
      selectedUserIndex: this.data.users?.findIndex(
        (user) => user.id === this.data.selectedUserId
      ),
    });

    return `
      ${new Container(
        `
          ${heading}
          ${barLadder.pushClasses(["leaders-ladder"])}
        `,
        "main"
      )}
    `;
  }
}
