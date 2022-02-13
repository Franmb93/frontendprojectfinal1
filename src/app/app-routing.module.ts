import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/modals/login/login.component';
import { UserRegisterComponent } from './components/modals/user-register/user-register.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: '', loadChildren: () => import('./modules/gallery/gallery.module').then(m => m.GalleryModule) },
	
	{ path: '', loadChildren: () => import('./modules/product-edit/product-edit.module').then(m => m.ProductEditModule) },
	{ path: '', loadChildren: () => import('./modules/user-edit/user-edit.module').then(m => m.UserEditModule) },
	
	{ path: '', loadChildren: () => import('./modules/product-details/product-details.module').then(m => m.ProductDetailsModule) },
	
	{ path: '', loadChildren: () => import('./modules/info-page/info-page.module').then(m => m.InfoPageModule) },
	// Paths temporales (testing de componentes)
	{ path: 'login', component: LoginComponent },
	{ path: 'register', loadChildren: () => import('./modules/user-edit/user-edit.module').then(m => m.UserEditModule) },
	
	{ path: 'home', component: HomeComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes),
	HttpClientModule],
	exports: [RouterModule]
})
export class AppRoutingModule { }
	