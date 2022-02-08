import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleryComponent } from './galery.component';

const routes: Routes = [{ path: '', component: GaleryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaleryRoutingModule { }
