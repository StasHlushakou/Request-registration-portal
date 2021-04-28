import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class RequestsGuard implements CanActivate{

    constructor(private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree{

        if (sessionStorage.getItem("User") != null) {
            return true;
        } else{
            let url: UrlTree = this.router.parseUrl('/login');
            return url;
        }

    }

}
