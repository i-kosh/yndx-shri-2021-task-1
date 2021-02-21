export default abstract class CommonView {
  // Abstract
  protected abstract render(): string;

  // Real
  private _template: string = "";

  toString() {
    if (this._template) return this._template;
    this._template = this.render();

    return this._template;
  }
}
