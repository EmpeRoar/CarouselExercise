import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Banner } from './models/banner.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('goRight', [
      state('goRight', style({
        transform: 'translateX(0)'
        
      })),
      state('stop', style({
        transform: 'translateX(15%)'
      })),
      transition('stop => goRight', [
        animate('0.5s')
      ])
    ]),
    trigger('goLeft', [
      state('goLeft', style({
        transform: 'translateX(15%)'
        
      })),
      state('stop', style({
        transform: 'translateX(0)'
      })),
      transition('stop => goLeft', [
        animate('0.5s')
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  
  banners: Banner[]= [
    {
      ID: 1,
      Title: 'Cow',
      FileName: './assets/images/cow.png'
    },
    {
      ID: 2,
      Title: 'Eagle',
      FileName: './assets/images/eagle.png'
    },
    {
      ID: 3,
      Title: 'Fish',
      FileName: './assets/images/fish.png'
    },
    {
      ID: 4,
      Title: 'Pinguen',
      FileName: './assets/images/pinguen.png'
    }
  ];

  title = 'My Carousel';

  selected: number = 0;
  goRightState: boolean = false;
  goLeftState: boolean = false;
  ngOnInit(): void {
   
  }

  getLeftBanner() {
    let leftIndex = 0;
    if(this.selected == 0) {
      leftIndex = this.banners.length - 1;
    } else {
      leftIndex = this.selected - 1;
    }
    return this.banners[leftIndex].FileName;
  }
  getCenterBanner() {
    return this.banners[this.selected].FileName;
  }
  getRightBanner() {
    let rightIndex = 0;
    if(this.selected > this.banners.length-2) {
      rightIndex = 0;
    } else {
      rightIndex = this.selected + 1;
    }
    return this.banners[rightIndex].FileName;
  }

  goLeft() {    
    this.goLeftState = true;
    if(this.selected == 0) {
      this.selected = this.banners.length - 1;
    } else {
      this.selected--;
    }
  }

  goRight() {    
    this.goRightState = true;    
    if(this.selected > this.banners.length-2) {
      this.selected = 0;
    } else {
      this.selected++;
    }
  }

  stopit() {
    this.goRightState = false;
    this.goLeftState = false;
  }
}
