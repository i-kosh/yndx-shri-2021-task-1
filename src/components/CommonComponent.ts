export default abstract class CommonComponent {
  // Abstract
  protected abstract render(): string;

  // Real
  private _template: string = "";
  private _classes: string[] = [];

  // Instance
  protected addClass(val: string): void {
    this._classes.push(val);
  }

  // Pub
  pushClasses(val: string[]): this {
    this._classes.push(...val);
    this._template = this.render();

    return this;
  }

  getClasses(): string {
    return this._classes.join(" ");
  }

  toString() {
    if (this._template) return this._template;
    this._template = this.render();

    return this._template;
  }
}
