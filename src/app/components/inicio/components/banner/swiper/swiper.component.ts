import { Component, OnInit } from '@angular/core';
// import Swiper core and required components
import SwiperCore, { EffectFade, Swiper } from 'swiper/core';
SwiperCore.use([EffectFade]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit {

  images: string[];
  constructor() {
    this.images = [
      '../../assets/images/banner-1.jpg',
      '../../assets/images/banner-2.jpg',
      '../../assets/images/banner-3.jpg'
    ];
  }

  ngOnInit(): void {
  }

  onSwiper(swiper: any): void {
    console.log(swiper);
  }
  onSlideChange(): void {
    console.log('slide change');
  }

}
