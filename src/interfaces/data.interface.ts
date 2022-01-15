export class Data {
  constructor(public name: string = "", public uuid: string = "") {}
}

export class DTO {
  constructor(
    public uuid: string = "",
    public data: Data[] = [],
    public storage: string = "data",
    public getDataStorage: any = () => {},
    public setValueEdit: any = {},
    public value: any = {},
    public setValue: any = {},
    public setData: any = [],
    public index: number = 0
  ) {}
}
