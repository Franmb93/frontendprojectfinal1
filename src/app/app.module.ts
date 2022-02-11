import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { CategoryBannerComponent } from './components/category-banner/category-banner.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SearchBarComponent } from './components/shared/search-bar/search-bar.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { MatButtonModule } from '@angular/material/button';
import { GalleryModule } from './modules/gallery/gallery.module';
import { ProductDetailsModule } from './modules/product-details/product-details.module';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';


@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
	SearchBarComponent,
	FooterComponent,

    HomeComponent,
    CategoryBannerComponent,
    FeaturedProductsComponent,
    UserCardComponent,
	ProductCardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatButtonModule,
    GalleryModule,
    ProductDetailsModule
    ],
  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
