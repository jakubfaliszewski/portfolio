import { Component, OnInit } from '@angular/core';
import { Works } from '../works';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  entrance = true;
  titleTransform = [];
  cursor = { x: 0, y: 0, transformClose: null, transformDistant: null, transformSecondPlan: null };

  constructor(public works: Works, private sanitization: DomSanitizer, private router: Router, private titleService: Title) { }

  ngOnInit() {
    this.entrance = false;
    this.calcParallax();
    this.cursorTracker();
    this.titleService.setTitle("Jakub Faliszewski");
    window.scrollBy({ top: -99999, left: 0, behavior: 'smooth' });
    document.addEventListener('scroll', () => {
      if (this.router.routerState.snapshot.url != ('/' || '')) return;
      this.calcParallax();
      let lastHighlight;
      for (let j = 0; j < this.works.all.length; j++) {
        let id = this.works.all[j].id;
        if (document.querySelector('#' + id).getBoundingClientRect().top < (window.innerHeight / 2))
          lastHighlight = document.querySelectorAll('.menu-item a')[j];
        document.querySelectorAll('.menu-item a')[j].classList.remove('active');
      }
      if (lastHighlight) lastHighlight.classList.add('active');

    });
  }

  calcParallax() {
    let tittles = document.querySelectorAll('.title');
    for (let i = 0; i < tittles.length; i++) {
      if (window.innerWidth > 600)
        this.titleTransform[i] = -(tittles[i].getBoundingClientRect().top / 4) + window.innerHeight / 10;
      else
        this.titleTransform[i] = -(tittles[i].getBoundingClientRect().top / 12) + window.innerHeight / 40;
    }
  }

  cursorTracker() {
    var t = this;
    addEventListener('mousemove', tellPos, false);
    function tellPos(p) {
      if (window.innerWidth > 600) {
        t.cursor.x = (p.clientX / window.innerWidth * 30) - 15;
        t.cursor.y = -(p.clientY / window.innerHeight * 30) + 15;
        t.cursor.transformClose = t.sanitization.bypassSecurityTrustStyle("rotateX(" + -t.cursor.y + "deg) rotateY(" + -t.cursor.x + "deg) translateZ(-100px)");
        t.cursor.transformDistant = t.sanitization.bypassSecurityTrustStyle("rotateX(" + t.cursor.y / 2 + "deg) rotateY(" + t.cursor.x / 2 + "deg) translateZ(100px)");
        t.cursor.transformSecondPlan = t.sanitization.bypassSecurityTrustStyle("rotateX(" + t.cursor.y / 2 + "deg) rotateY(" + t.cursor.x / 2 + "deg) translateZ(-100px)");
      }
      else {
        t.cursor.transformClose = null;
        t.cursor.transformDistant = null;
        t.cursor.transformSecondPlan = null;
      }
    }
  }

  showWork(id) {
    this.router.navigate(['', id]);
  }

}
