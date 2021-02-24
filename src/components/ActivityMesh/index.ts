import "./style.scss";
import CommonComponent from "../CommonComponent";
import Tile from "../MeshTile";

interface IConfig {
  rows: Array<0 | 1 | 2 | 3>[];
}

export default class ActivityMeshClass extends CommonComponent {
  constructor(private cfg?: IConfig) {
    super();
  }

  static toTileSize(val: number): 0 | 1 | 2 | 3 {
    if (val >= 1 && val <= 2) return 1;
    if (val >= 3 && val <= 4) return 2;
    if (val >= 5) return 3;
    return 0;
  }

  render() {
    let maxRowLength = 1;
    const tileRows =
      this.cfg?.rows.reduce((accum, valArr) => {
        if (maxRowLength < valArr.length) {
          maxRowLength = valArr.length;
        }

        return `${accum}
        <div class="mesh__row">
          ${valArr.reduce((accum1, val1) => {
            return `${accum1} ${new Tile({
              size: val1,
            })}`;
          }, "")}
        </div>`;
      }, "") || "";

    return `
    <div class="mesh ${this.getClasses()}" style="--inrow: ${maxRowLength};">
      ${tileRows}
    </div>
    `;
  }
}
