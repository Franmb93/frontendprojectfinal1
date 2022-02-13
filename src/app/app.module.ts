import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { HeaderComponent } from './components/shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { CategoryBannerComponent } from './components/category-banner/category-banner.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SearchBarComponent } from './components/shared/search-bar/search-bar.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { GalleryModule } from './modules/gallery/gallery.module';
import { ProductDetailsModule } from './modules/product-details/product-details.module';

import { LoginComponent } from './components/modals/login/login.component';
import { FormsModule } from '@angular/forms';
import { ProductEditModule } from './modules/product-edit/product-edit.module';
import { UserEditModule } from './modules/user-edit/user-edit.module';

@NgModule({
	declarations: [
		AppComponent,
		
		HeaderComponent,
		SearchBarComponent,
		FooterComponent,

		HomeComponent,
		CategoryBannerComponent,
		FeaturedProductsComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,

		MaterialModule,
		FormsModule,

		AppRoutingModule,

		GalleryModule,
		ProductDetailsModule,
		ProductEditModule,
		UserEditModule
	],	
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
