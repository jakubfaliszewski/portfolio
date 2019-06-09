import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Works } from '../works';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  private sub: any;
  public work;
  constructor(private route: ActivatedRoute, private titleService: Title, private router: Router, public works: Works) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.checkIfWorkExist(params.name);
      window.scrollBy({ top: -99999, left: 0, behavior: 'smooth' });
    });
  }

  checkIfWorkExist(name) {
    this.work = this.works.all.find(matchName);
    function matchName(element) {
      return element.id == name && element.screens;
    }
    if (!this.work) this.router.navigate(['404']);
    this.highlightMenu();
    this.changeTitle(this.work.title);
  }

  changeTitle(title) {
    this.titleService.setTitle("JF - " + title);
  }

  highlightMenu() {
    for (let j = 0; j < this.works.all.length; j++) {
      let el = document.querySelectorAll('.footer-list li a')[j];
      el.classList.remove('active');
      if (el.textContent == this.work.title) el.classList.add('active');
    }

  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
