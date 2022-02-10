import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { CategoryBannerComponent } from './components/category-banner/category-banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryComponent } from './components/category/category.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { FeaturedCardComponent } from './components/featured-card/featured-card.component';
import { MatButtonModule } from '@angular/material/button';
import { ProductModule } from './components/product/product.module';
import { ProductCardComponent } from './components/product/product-card/product-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CategoryBannerComponent,
    FooterComponent,
    CategoryComponent,
    SearchBarComponent,
    User-ruta
    FeaturedProductsComponent,
    FeaturedCardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ProductModule,
    BrowserAnimationsModule,
    User-ruta ,
    MatButtonModule,
    ProductModule
    ],
  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
