export class User {
    readonly _id : number;
    readonly _login: string;
    readonly _password: string;

    constructor(id : number, login: string, password: string) {
        this._id = id;
        this._login = login;
        this._password = password;
    }
}
