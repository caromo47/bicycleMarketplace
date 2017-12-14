import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BicycleService } from './bicycle.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikesComponent } from './bikes/bikes.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './bikes/list/list.component';
import { CreateComponent } from './bikes/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    BikesComponent,
    LoginComponent,
    ListComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule,
		HttpModule
  ],
  providers: [BicycleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
