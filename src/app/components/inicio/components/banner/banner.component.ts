import { Component, OnInit } from '@angular/core';
import SwiperCore from "swiper/core";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  images: string[];
  constructor() {
    this.images = [
      'assets/images/banner-1.jpg',
      'assets/images/banner-2.jpg',
      'assets/images/banner-3.jpg'
    ];
  }

  ngOnInit(): void {
  }

}
