import { Component, OnInit} from '@angular/core';
import { Works } from '../works';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  entrance = true;
  titleTransform = [];
  cursor = { x: 0, y: 0, transformClose: null, transformDistant: null };

  constructor(public works: Works, private sanitization: DomSanitizer) { }

  ngOnInit() {
    window.addEventListener('load', () => {
      this.entrance = false;
      this.calcParallax();
      this.cursorTracker();
    })

    document.addEventListener('scroll', () => {
      this.calcParallax();
      let lastHighlight;
      for (let j = 0; j < this.works.all.length; j++) {
        let id = this.works.all[j].id;
        if (document.querySelector('#' + id).getBoundingClientRect().top < (window.innerHeight / 2))
          lastHighlight = document.querySelectorAll('.footer-list li a')[j];
        document.querySelectorAll('.footer-list li a')[j].classList.remove('active');

      }
      if (lastHighlight) lastHighlight.classList.add('active');

    });
  }

  calcParallax() {
    let tittles = document.querySelectorAll('.title');
    for (let i = 0; i < tittles.length; i++) {
      this.titleTransform[i] = -(tittles[i].getBoundingClientRect().top / 4) + window.innerHeight / 10;
    }
  }

  cursorTracker() {
    var t = this;
    addEventListener('mousemove', tellPos, false);
    function tellPos(p) {
      t.cursor.x = (p.clientX / window.innerWidth * 30) - 15;
      t.cursor.y = -(p.clientY / window.innerHeight * 30) + 15;
      t.cursor.transformClose = t.sanitization.bypassSecurityTrustStyle("rotateX(" + -t.cursor.y + "deg) rotateY(" + -t.cursor.x + "deg) translateZ(100px)");
      t.cursor.transformDistant = t.sanitization.bypassSecurityTrustStyle("rotateX(" + t.cursor.y/2 + "deg) rotateY(" + t.cursor.x/2 + "deg) translateZ(-100px)");
    }
  }
  showWork(id) {
    console.log(id);
  }

}
