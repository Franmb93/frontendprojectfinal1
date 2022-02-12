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
import { GalleryModule } from './modules/gallery/gallery.module';
import { ProductDetailsModule } from './modules/product-details/product-details.module';
import { ProductEditModule } from './modules/product-edit/product-edit.module';
import { UserEditModule } from './modules/user-edit/user-edit.module';
import { LoginComponent } from './components/modals/login/login.component';

@NgModule({
	declarations: [
		AppComponent,
		
		// Shared
		HeaderComponent,
		SearchBarComponent,
		FooterComponent,
		
		// Specifics
		HomeComponent,
		CategoryBannerComponent,
		FeaturedProductsComponent,
		
		// Modals
		LoginComponent
		// ProductRegisterComponent,
		// UserRegisterComponent
	],
	imports: [
		AppRoutingModule,
		
		BrowserModule,
		BrowserAnimationsModule,
		
		MaterialModule,
		
		GalleryModule,
		ProductDetailsModule,
		ProductEditModule,
		UserEditModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
