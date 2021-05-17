import {User} from '../User'
import {Request} from "../Request";

export class LocalStorageService{

    private static getUsersFromStorage(): User[]{
        let users: User[] =  JSON.parse( localStorage.getItem("Users") );
        if (users == null){
            users = [];
        }
        return users;
    }

    private static addUserToStorage(user: User): void{
        let users: User[] =  LocalStorageService.getUsersFromStorage();
        users.push(user);
        localStorage.removeItem("Users");
        localStorage.setItem("Users", JSON.stringify(users));
    }

    private static getRequestFromStorage(): Request[]{
        let requests: Request[] =  JSON.parse( localStorage.getItem("Requests") );
        if (requests == null){
            requests = [];
        }
        return requests;
    }

    private static addRequestToStorage(request: Request): void{
        let requests: Request[] =  LocalStorageService.getRequestFromStorage();
        requests.push(request);
        localStorage.removeItem("Requests");
        localStorage.setItem("Requests", JSON.stringify(requests));
    }

    private static removeRequestFromStorageById(recordId: number): void{
        let requests: Request[] =  JSON.parse( localStorage.getItem("Requests") );
        for (let i =0; i < requests.length; i++){
            if (requests[i]._id === recordId){
                requests.splice(i,1);
                localStorage.removeItem("Requests");
                localStorage.setItem("Requests", JSON.stringify(requests));
                return;
            }
        }
    }




    static IsExistUserWithLogin(login: string): boolean {
        let userList: User[] =  LocalStorageService.getUsersFromStorage();
        for (let i =0; i < userList.length; i++){
            if (userList[i]._login == login){
                return  true;
            }
        }
        return false;
    }

    static getUserByLoginPassword(login: string, password: string): User {
        let userList: User[] =  LocalStorageService.getUsersFromStorage();
        for (let i =0; i < userList.length; i++){
            if (userList[i]._login == login && userList[i]._password == password){
                return  userList[i];
            }
        }
        return null;
    }

    static addUser(login: string, password: string): User {
        let userList: User[] =  LocalStorageService.getUsersFromStorage();
        let user = new User(userList.length+1, login, password);
        LocalStorageService.addUserToStorage(user);
        return user;
    }

    static getRequestByUserId(userId: number): Request[] {
        let requestList: Request[] = LocalStorageService.getRequestFromStorage();
        let requests: Request[] = [];

        for (let i =0; i < requestList.length; i++){
            if (requestList[i]._userId == userId){
                requests.push(requestList[i]);
            }
        }
        return requests;
    }

    static addRequest(userId: number, theme: string, description: string, date: Date): void {
        let requestList: Request[] = LocalStorageService.getRequestFromStorage();
        if (requestList.length == 0){
            LocalStorageService.addRequestToStorage(new Request(1, userId, theme, description, date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear()));
        } else {
            LocalStorageService.addRequestToStorage(new Request(requestList[(requestList.length - 1)]._id +1, userId, theme, description, date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear()));
        }

    }

    static removeRequestById(recordId: number): void{
        LocalStorageService.removeRequestFromStorageById(recordId);
    }

    static getRequestById(userId: number, recordId: number): Request{
        let requests = LocalStorageService.getRequestByUserId(userId);
        for (let i = 0; i < requests.length; i++){
            if (requests[i]._id == recordId) return requests[i];
        }
        return null;
    }


}
