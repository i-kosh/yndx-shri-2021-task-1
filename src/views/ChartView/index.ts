import Common from "../CommonView";
import Container from "../../components/Container";
import MainHeading from "../../components/MainHeading";
import ChartBoard from "../../components/ChartBoard";

interface ChartSlide {
  subtitle: string;
  title: string;
  users: {
    id: number;
    name: string;
    avatar: string;
    valueText: string;
  }[];
  values: {
    title: string;
    value: number;
    active?: boolean;
  }[];
}

export default class ChartView extends Common {
  constructor(private data: Partial<ChartSlide>) {
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
          ${new ChartBoard({
            values: this.data.values,
            users: this.data.users,
          })}
        `,
        "main"
      ).pushClasses(["chart-view"])}
    `;
  }
}
