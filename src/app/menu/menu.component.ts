import { Component, OnInit } from '@angular/core';
import { Works } from '../works';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'p-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  entrance = true;
  constructor(public works: Works, private router: Router, public app: AppComponent) {
  }

  ngOnInit() {
    window.addEventListener('load', () => {
      this.entrance = false;
    })
  }

  moveTo(id) {
    if (id == 'about') this.goToHome()
    else {
    if (this.router.routerState.snapshot.url != '/') this.matchUrl(this.router.routerState.snapshot.url, id)
      else this.scrollTo(id)
    }
  }

  scrollTo(id) {
    let targetID = '#' + id;
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);
    window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
    const checkIfDone = setInterval(function () {
      const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
      if (distanceToTop(targetAnchor) === 0 || atBottom) {
        window.history.pushState('', '', targetID);
        clearInterval(checkIfDone);
      }
    }, 100);
  }

  goToHome() {
    this.router.navigate(['']);
  }

  toggleMenu() {
    this.app.menuVisible = !this.app.menuVisible;
  }

  matchUrl(url, id) {
    if (url.startsWith("/#")) this.scrollTo(id)
    else {
      this.router.navigate(['', id]);
    }
  }

}