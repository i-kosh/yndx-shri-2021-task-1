import "./style.scss";
import Common from "../CommonView";
import Container from "../../components/Container";
import MainHeading from "../../components/MainHeading";
import DiagramLegend from "../../components/DiagramLegend";
import PieChart from "../../components/PieChart";

interface IDiagramView {
  subtitle: string;
  title: string;
  totalText: string;
  differenceText: string;
  categories: {
    title: string;
    differenceText: string;
    valueText: string;
  }[];
}

export default class DiagramView extends Common {
  constructor(private data: Partial<IDiagramView>) {
    super();
  }

  render() {
    const heading = new MainHeading({
      title: this.data.title || "",
      subtitle: this.data.subtitle,
    });

    const legend = new DiagramLegend({
      values:
        this.data.categories?.map((val) => {
          return {
            diff: val.differenceText.split(" ")[0],
            title: val.title,
            value: val.valueText.split(" ")[0],
          };
        }) || [],
    });

    return `
      ${new Container(
        `
          ${heading}
          <div class="diagram-view__content">
            <div class="diagram-view__chart">
              ${new PieChart({
                title: this.data.totalText || "",
                sub: this.data.differenceText || "",
                values:
                  this.data.categories?.map((val) => parseInt(val.valueText)) ||
                  [],
              })}
            </div>
            <div class="diagram-view__legend">
              ${legend}
            </div>
          </div>
        `,
        "main"
      ).pushClasses(["diagram-view"])}
    `;
  }
}
