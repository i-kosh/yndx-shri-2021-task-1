import "./style.scss";
import Common from "../CommonView";
import Container from "../../components/Container";
import MainHeading from "../../components/MainHeading";
import Legend from "../../components/ActivityLegend";
import Mesh from "../../components/ActivityMesh";
import { chunk, add } from "lodash-es";

interface ActivitySlide {
  subtitle: string;
  title: string;
  data: {
    fri: number[];
    mon: number[];
    sat: number[];
    sun: number[];
    thu: number[];
    tue: number[];
    wed: number[];
  };
}

export default class ActivityView extends Common {
  constructor(private data: Partial<ActivitySlide>) {
    super();
  }

  private getMeshLadscape() {
    const reduct = (arr?: number[]) => {
      return chunk(arr, 2).map((arrChunk) => {
        return Mesh.toTileSize(add(arrChunk[0], arrChunk[1] ?? 0));
      });
    };

    const rows = [
      reduct(this.data.data?.mon),
      reduct(this.data.data?.tue),
      reduct(this.data.data?.wed),
      reduct(this.data.data?.thu),
      reduct(this.data.data?.fri),
      reduct(this.data.data?.sat),
      reduct(this.data.data?.sun),
    ];

    return new Mesh({ rows });
  }

  private getMeshPortrait() {
    const HOURS = 24;
    const rows: Array<0 | 1 | 2 | 3>[] = [];

    for (let index = 0; index < HOURS; index++) {
      rows.push([
        Mesh.toTileSize(this.data.data?.mon[index] || 0),
        Mesh.toTileSize(this.data.data?.tue[index] || 0),
        Mesh.toTileSize(this.data.data?.wed[index] || 0),
        Mesh.toTileSize(this.data.data?.thu[index] || 0),
        Mesh.toTileSize(this.data.data?.fri[index] || 0),
        Mesh.toTileSize(this.data.data?.sat[index] || 0),
        Mesh.toTileSize(this.data.data?.sun[index] || 0),
      ]);
    }

    return new Mesh({ rows });
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
          <section class="activity-view__content">
            <div class="landscape--only">
              ${this.getMeshLadscape()}
            </div>
            <div class="portrait--only">
              ${this.getMeshPortrait()}
            </div>
            ${new Legend().pushClasses(["activity-view__legend"])}
          </section>
        `,
        "main"
      ).pushClasses(["activity-view"])}
    `;
  }
}
