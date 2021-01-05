import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';


import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BannerComponent } from './components/inicio/banner/banner.component';
import { FooterComponent } from './components/inicio/footer/footer.component';
import { HeaderComponent } from './components/inicio/header/header.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    ProductsComponent,
    ContactsComponent,
    InicioComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    SwiperComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
