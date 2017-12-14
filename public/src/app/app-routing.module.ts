import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {BikesComponent} from './bikes/bikes.component';
import { CreateComponent } from './bikes/create/create.component';
import { ListComponent } from './bikes/list/list.component';

const routes: Routes = [
	{path: 'login', component: LoginComponent},
	{path: '', redirectTo: 'login', pathMatch:'full'},
	{path: 'dashboard', redirectTo:'bikes/list', pathMatch:'full'},
	{path: 'bikes', component: BikesComponent, children: [
		{path: 'list', component: ListComponent},
		{path: 'mybikes', component: CreateComponent}
	]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
