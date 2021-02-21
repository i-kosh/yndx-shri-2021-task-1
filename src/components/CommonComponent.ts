export default abstract class CommonComponent {
  abstract template: string;
  private _classes: string[] = [];

  addClass(val: string): void {
    this._classes.push(val);
  }

  getClasses(): string {
    return this._classes.join(" ");
  }
}
