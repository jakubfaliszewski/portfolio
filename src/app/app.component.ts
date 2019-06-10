import { Component } from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  RouterOutlet
} from '@angular/router';
import { slider } from './animations';

import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [slider],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading: boolean = true;
  isHome: boolean = false;
  menuVisible: boolean = false;

  constructor(private router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    })
    console.info("App is running, yay!");
    console.info("%cHave a nice day, human (ಠ‿↼)", "font-weight: bold");

  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  animationStarted($event) {
    //console.log('Start');
  }

  animationDone($event) {
    window.scrollBy({ top: -99999, left: 0, behavior: 'smooth' });
  }

  navigationInterceptor(event: RouterEvent): void {

    if (event instanceof NavigationStart) {
      this.loading = true
      this.menuVisible = false;
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => {
        this.loading = false;
        this.isHome = this.router.routerState.snapshot.url == '/' || this.router.routerState.snapshot.url.startsWith('/#') ? true : false;
      }, 200);
    }

    if (event instanceof NavigationCancel) {
      this.loading = false;
    }
    if (event instanceof NavigationError) {
      this.loading = false;
    }
  }
}
