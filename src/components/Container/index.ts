import "./style.scss";
import CommonComponent from "../CommonComponent";

export default class ContainerClass extends CommonComponent {
  defaultTag: string = "div";

  constructor(private slot?: string, private tagName?: string) {
    super();
  }

  render() {
    const tag = this.tagName || this.defaultTag;

    return `
    <${tag} class="container">
      ${this.slot || ""}
    </${tag}>
    `;
  }
}
