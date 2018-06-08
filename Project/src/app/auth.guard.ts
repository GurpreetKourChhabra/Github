import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , CanActivateChild} from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private service : AuthService , private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
      const token = this.service.getToken();
      if(token) {
        return true;
      }
      else {
        return false;
      }
  }
}
