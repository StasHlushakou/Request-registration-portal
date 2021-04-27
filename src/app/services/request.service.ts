import {Injectable} from "@angular/core";
import {Request} from "../Request";
import {LocalStorageService} from "./localStorage.service";


@Injectable()
export class RequestService{

    constructor(private localStorageService: LocalStorageService){}


    static getRecordsByUserId(userId: number): Request[] {
        return LocalStorageService.getRequestByUserId(userId);
    }

    static addRequest(userId: number, theme: string, description: string): void {
        LocalStorageService.addRequest(userId, theme, description);
    }

    static removeRecordById(recordId: number): void{
        LocalStorageService.removeRequestById(recordId);
    }

}
