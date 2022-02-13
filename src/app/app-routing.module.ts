import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/modals/login/login.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: '', loadChildren: () => import('./modules/gallery/gallery.module').then(m => m.GalleryModule) },
	
	{ path: '', loadChildren: () => import('./modules/product-edit/product-edit.module').then(m => m.ProductEditModule) },
	{ path: '', loadChildren: () => import('./modules/user-edit/user-edit.module').then(m => m.UserEditModule) },
	
	{ path: '', loadChildren: () => import('./modules/product-details/product-details.module').then(m => m.ProductDetailsModule) },
	
	//TODO: delete productedit path
	{ path: 'login', component: LoginComponent },
	
	{ path: 'home', component: HomeComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes),
	HttpClientModule],
	exports: [RouterModule]
})
export class AppRoutingModule { }
	