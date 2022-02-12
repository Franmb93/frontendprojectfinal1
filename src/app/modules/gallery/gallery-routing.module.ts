import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery.component';

const routes: Routes = [
	{ path: 'todos', component: GalleryComponent },

	{ path: 'resultados', component: GalleryComponent, data: { type: "results" } },

	{ path: 'ropa', component: GalleryComponent, data: { type: "category", category: "ropa" } },
	{ path: 'coches', component: GalleryComponent, data: { type: "category", category: "coche" } },
	{ path: 'smartphones', component: GalleryComponent, data: { type: "category", category: "smartphones" } },

	{ path: 'usuario/:id', component: GalleryComponent, data: { type: "user" } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
