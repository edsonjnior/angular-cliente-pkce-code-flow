import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ConsultasComponent} from './consultas/consultas.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'consultas', component: ConsultasComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
