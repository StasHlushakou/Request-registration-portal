import {Injectable} from "@angular/core";
import {Request} from "../Request";
import {LocalStorageService} from "./localStorage.service";


@Injectable()
export class RequestService{

    constructor(private localStorageService: LocalStorageService){}


    static getRecordsByUserId(userId: number): Request[] {
        return LocalStorageService.getRequestByUserId(userId);
    }

    static addRequest(userId: number, theme: string, description: string, date: Date): void {
        LocalStorageService.addRequest(userId, theme, description, date);
    }

    static removeRecordById(recordId: number): void{
        LocalStorageService.removeRequestById(recordId);
    }

    static getRequestById(userId: number, recordId: number): Request{
        return LocalStorageService.getRequestById(userId, recordId);
    }

}
