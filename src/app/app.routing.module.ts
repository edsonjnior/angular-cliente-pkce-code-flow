import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ConsultasComponent} from './consultas/consultas.component';
import { CallbackComponent } from './callback/callback.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'consultas', component: ConsultasComponent},
  {path: 'callback', component: CallbackComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
