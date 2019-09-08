import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreviousRouteService {

  previousUrl: string;
  currentUrl: string;
  emitUrl = new BehaviorSubject<string>('');

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
        this.emitUrl.next(this.previousUrl);
      }
    });
  }

  getPreviousUrl() {
    return this.emitUrl;
  }
}
