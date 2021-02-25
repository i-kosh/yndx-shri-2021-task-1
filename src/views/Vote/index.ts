import VoteBoard from "../../components/VoteBoard";
import Common from "../CommonView";
import Container from "../../components/Container";
import MainHeading from "../../components/MainHeading";

interface VoteSlide {
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

export default class Vote extends Common {
  constructor(private data: Partial<VoteSlide>) {
    super();
  }

  render() {
    const heading = new MainHeading({
      title: this.data.title || "",
      subtitle: this.data.subtitle,
    });

    return `
      ${new Container(
        `
          ${heading}
          ${new VoteBoard({
            users:
              this.data.users?.map((user) => {
                return {
                  avatar: user.avatar,
                  name: user.name,
                  id: user.id,
                };
              }) || [],
            selectedUserIndex: this.data.users?.findIndex(
              (user) => user.id === this.data.selectedUserId
            ),
          })}
        `,
        "main"
      )}
    `;
  }
}
