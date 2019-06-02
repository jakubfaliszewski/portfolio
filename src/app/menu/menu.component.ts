import { Component, OnInit } from '@angular/core';
import { Works } from '../works';

@Component({
  selector: 'p-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  entrance = true;
  constructor(public works: Works) {
  }

  ngOnInit() {
    window.addEventListener('load', () => {
      this.entrance = false;
    })
  }

  moveTo(id) {
    let targetID = '#' + id;
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
    //var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
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

}
