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
import * as paper from 'paper';
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
  isStuck: boolean = false;
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

  ngOnInit() {
    function is_touch_device() {
      var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
      var mq = function (query) {
        return window.matchMedia(query).matches;
      }

      if (('ontouchstart' in window) || (<any>window).DocumentTouch) {
        return true;
      }

      // include the 'heartz' as a way to have a non matching MQ to help terminate the join
      // https://git.io/vznFH
      var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
      return mq(query);
    }
    if (!is_touch_device())
      this.initCursor();
  }

  initCursor() {
    // init cursor
    document.querySelector("body").classList.add('nocursor');
    let clientX = -100;
    let clientY = -100;
    const innerCursor = <any>document.querySelector(".cursor-small");

    const init = () => {
      document.addEventListener("mousemove", e => {
        clientX = e.clientX;
        clientY = e.clientY;
      });

      const render = () => {
        innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
        requestAnimationFrame(render);
      };
      requestAnimationFrame(render);
    };

    init();

    //init canvas
    let lastX = 0;
    let lastY = 0;
    let showCursor = false;
    let group, fillOuterCursor;


    const initCanvas = () => {
      const canvas = <HTMLCanvasElement>document.querySelector(".cursor-canvas");
      const shapeBounds = {
        width: 75,
        height: 75
      };
      paper.setup(canvas);
      const strokeColor = "#ffe200";
      const strokeWidth = 2;
      const segments = 8;
      const radius = 15;
      const polygon = new paper.Path.RegularPolygon(
        new paper.Point(0, 0),
        segments,
        radius
      );
      polygon.strokeColor = <any>strokeColor;
      polygon.strokeWidth = strokeWidth;
      polygon.smooth();
      group = new paper.Group([polygon]);
      group.applyMatrix = false;

      const lerp = (a, b, n) => {
        return (1 - n) * a + n * b;
      };

      const map = (value, in_min, in_max, out_min, out_max) => {
        return (
          ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
        );
      };


      paper.view.onFrame = event => {
        if (this.isStuck) {
          polygon.opacity = 0;
        } else { polygon.opacity = 1; }
        lastX = lerp(lastX, clientX, 0.2);
        lastY = lerp(lastY, clientY, 0.2);
        group.position = new paper.Point(lastX, lastY);
      }
    }

    initCanvas();
  }

  initHover() {
    let stuckX, stuckY;
    const initHovers = () => {

      const handleMouseEnter = e => {
        const navItem = e.currentTarget;
        const navItemBox = navItem.getBoundingClientRect();
        stuckX = Math.round(navItemBox.left + navItemBox.width / 2);
        stuckY = Math.round(navItemBox.top + navItemBox.height / 2);
        this.isStuck = true;
      };

      // reset isStuck on mouseLeave
      const handleMouseLeave = () => {
        this.isStuck = false;
      };

      const linkItems = document.querySelectorAll(".link");
      linkItems.forEach(item => {
        item.addEventListener("mouseenter", handleMouseEnter);
        item.addEventListener("mouseleave", handleMouseLeave);
      });
    };

    initHovers();
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
        this.initHover();
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
