import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.scss']
})
export class AboutMePageComponent implements OnInit {
  animate = false;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.animate = true;
    }, 300);
  }

}
