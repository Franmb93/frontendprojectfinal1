import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPageComponent } from './info-page.component';

const routes: Routes = [
  { path: 'info', component: InfoPageComponent, data: { type: "info" } },
  { path: 'aviso-legal', component: InfoPageComponent, data: { type: "aviso-legal" } },
  { path: 'politicas-privacidad', component: InfoPageComponent, data: { type: "politicas-privacidad" } },
  { path: 'cookies', component: InfoPageComponent, data: { type: "cookies" } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoPageRoutingModule { }
