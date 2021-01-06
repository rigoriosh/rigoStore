import { NgModule } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { HomeRoutingModule } from './home-routing.module';
import { InicioComponent } from './components/home/inicio.component';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import {SwiperComponent} from './components/banner/swiper/swiper.component';


@NgModule({
    declarations: [
        BannerComponent,
        InicioComponent,
        SwiperComponent,
    ],
    imports: [
        HomeRoutingModule,
        CommonModule,
        SwiperModule
    ],
})
export class HomeModule{

}
