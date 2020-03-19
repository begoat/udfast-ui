export class CustomSubscription {
  private _subscribeCbList: Array<any>;
  constructor() {
    this._subscribeCbList = [];
  }

  public tiggerCbs(...args: any[]) {
    this._subscribeCbList.forEach(s => s(args));
  }

  public registerCbs(cb: Function) {
    this._subscribeCbList.push(cb);
    return () => {
      this._subscribeCbList = this._subscribeCbList.filter(s => s !== cb);
    };
  }
}
