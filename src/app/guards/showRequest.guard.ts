import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class ShowRequestGuard implements CanActivate{

    constructor(private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree{

        if (sessionStorage.getItem("Request") != null) {
            return true;
        } else{
            let url: UrlTree = this.router.parseUrl('/requests');
            return url;
        }

    }

}
