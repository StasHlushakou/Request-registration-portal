import {User} from '../User'
import {Record} from "../Record";

export class DataService{

    private userIdCounter = 2;
    private userList: User[] = [
        { "_id": 1, "_login": "qwe", "_password": "qwe" },
        { "_id": 2, "_login": "asd", "_password": "asd" },
    ];

    private recordIdCounter = 5;
    private recordList: Record[] = [
        { "_id": 1, "_userId": 1, "_theme": "theme 1", "_description": "description 1", "_date": "1.4.2021"},
        { "_id": 2, "_userId": 1, "_theme": "theme 2", "_description": "description 2", "_date": "2.4.2021" },
        { "_id": 3, "_userId": 1, "_theme": "theme 3", "_description": "description 3", "_date": "3.4.2021" },
        { "_id": 4, "_userId": 2, "_theme": "theme 4", "_description": "description 4", "_date": "4.4.2021" },
        { "_id": 5, "_userId": 2, "_theme": "theme 5", "_description": "description 5", "_date": "5.4.2021" }
    ];


    getUserByLogin(login: string): User {
        for (let i =0; i < this.userList.length; i++){
            if (this.userList[i]._login == login){
                return  this.userList[i];
            }
        }
        return null;
    }

    addUser(login: string, password: string): void {
        this.userIdCounter++;
        this.userList.push(new User(this.userIdCounter, login, password));
    }

    getRecordsByUserId(userId: number): Record[] {
        let records: Record[] = [];

        for (let i =0; i < this.recordList.length; i++){
            if (this.recordList[i]._userId == userId){
                records.push(this.recordList[i]);
            }
        }
        return records;
    }

    addRecord(userId: number, theme: string, description: string): void {
        this.recordIdCounter++;
        let date = new Date();
        this.recordList.push(new Record(this.recordIdCounter, userId, theme, description, date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear()));
    }

    removeRecordById(recordId: number): void{
        for (let i =0; i < this.recordList.length; i++){
            if (this.recordList[i]._id === recordId){
                this.recordList.splice(i,1)
                return;
            }
        }
    }


}
