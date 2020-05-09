import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StatusService } from './status.service';

@Injectable({
  providedIn: 'root'
})
export class BaseGuard implements CanLoad {

  constructor(private satusService: StatusService, private router: Router) { }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.satusService.operationPageConfiguration) {
      return true;
    }
    this.router.navigateByUrl('');
    return false;
  }
}
