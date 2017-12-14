import { Component, OnInit } from '@angular/core';
import { BicycleService } from './../bicycle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './../user';
import { Bike } from './../bike';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	newUser: User = new User();
	loggedUser: User = new User();
	random: Bike = new Bike();
	errors: Array<string> = [];

  constructor(private _bicycleservice: BicycleService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
		this._bicycleservice.getRandom()
		.then((bike)=> this.random = bike )
		.catch((err)=> console.log(err))
  }
	registerValid(){
		this._bicycleservice.register(this.newUser)
		.then((data)=>{
			data.errors ? (
				console.log(data.errors)
			) : (
				console.log('great success!', data),
				this._router.navigate(['dashboard'])
			)
		})
		.catch((err)=>{
			console.log(err)
		})
	}
	loginValid(){
		console.log('loginValid');
		this._bicycleservice.login(this.loggedUser)
		.then((data)=>{
			if (data.errors){
				this.errors=[]
				console.log(data.errors);
				this.errors.push(data.errors);

			} else {
				console.log('successfully logged in', data);
				this._router.navigate(['dashboard']);
			};
		})
		.catch((err)=>{
			console.log(err, "catch");
		})
	}
}
