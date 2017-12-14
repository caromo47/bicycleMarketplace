import { Component, OnInit } from '@angular/core';
import { BicycleService } from './../bicycle.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  constructor(private _bicycleservice: BicycleService, private _router: Router) { }

  ngOnInit() {
		this._bicycleservice.getCurrent()
		.then((user)=> {
			console.log(user);
		})
		.catch((err)=> {
			this._router.navigate(['login'])
		})
  }
	logout(){
		this._bicycleservice.logout()
		.then(()=>{
			this._router.navigate(['/login']);
		})
		.catch((err)=>{
			console.log(err);
		})
	}
}
