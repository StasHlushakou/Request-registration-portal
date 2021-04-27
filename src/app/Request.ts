export class Request {
    readonly _id : number;
    readonly _userId: number;
    readonly _theme: string;
    readonly _description: string;
    readonly _date: string;

    constructor(id : number, userId : number, theme: string, description: string, date: string) {
        this._id = id;
        this._userId= userId;
        this._theme = theme;
        this._description = description;
        this._date = date;
    }
}
