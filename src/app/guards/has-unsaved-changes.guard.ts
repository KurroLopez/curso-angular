import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface HasUnsavedChanges {
  hasUnsavedChanges(): boolean
}

@Injectable({
  providedIn: 'root'
})
export class HasUnsavedChangesGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: HasUnsavedChanges,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (component.hasUnsavedChanges()){
        return window.confirm('¿Quieres salir y cancelar la edición?');
      }
      return true;
  }

}
