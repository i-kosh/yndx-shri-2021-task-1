import "./style.scss";
import CommonComponent from "../CommonComponent";
import Bar from "../Bar";

interface ICfg {
  values: {
    title: string;
    value: number;
    active?: boolean;
  }[];
}

export default class Chart extends CommonComponent {
  constructor(private cfg: ICfg) {
    super();
  }

  render() {
    let beforeActive: ICfg["values"] = [],
      afterActive: ICfg["values"] = [],
      active: ICfg["values"] = [];
    const onePercent =
      Math.max(
        ...this.cfg.values.map((val) => {
          if (val.active) {
            active.push(val);
          } else if (!active.length) {
            beforeActive.push(val);
          } else {
            afterActive.push(val);
          }

          return val.value;
        })
      ) / 100;

    const MAX_BEFORE = 6;
    const MAX_AFTER = 2;
    const beforeActiveStartIndex =
      beforeActive.length - MAX_BEFORE >= 0
        ? beforeActive.length - MAX_BEFORE
        : 0;
    const vals = [
      ...beforeActive.slice(beforeActiveStartIndex),
      ...active,
      ...afterActive.slice(0, MAX_AFTER),
    ];

    return `
    <div class="chart ${this.getClasses()}">
      ${vals.reduce((accum, val) => {
        return `${accum} ${new Bar({
          small: true,
          aboweSlot: `${val.value || ""}`,
          underSlot: val.title,
          accent: val.active,
          height: Math.ceil(val.value / onePercent),
        }).pushClasses(["chart__bar"])}`;
      }, "")}
    </div>
    `;
  }
}
