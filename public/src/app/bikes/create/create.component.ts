import { Component, OnInit } from '@angular/core';
import { BicycleService } from './../../bicycle.service';
import { User } from './../../user';
import { Bike } from './../../bike';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
	newBike: Bike = new Bike();
	myBikes: Array<Bike> = [];

  constructor(private _bicycleservice: BicycleService) { }

  ngOnInit() {
		this.getBikes();
  }

	getBikes(){
		this._bicycleservice.getAllUserBikes()
		.then((bikes)=>{
			this.myBikes = bikes;
			console.log(bikes);
		})
		.catch((err)=>{
			console.log(err);
		})
	}

	addBike(){
		this._bicycleservice.addBike(this.newBike)
		.then(()=>{
			this.getBikes();
		})
		.catch((err)=>{
			console.log(err);
		})
	}

	updateBike(idx){
		this._bicycleservice.updateBike(this.myBikes[idx])
		.then(()=>{
			this.getBikes();
		})
		.catch((err)=>{
			console.log(err);
		})
	}

	deleteBike(idx){
		this._bicycleservice.deleteBike(this.myBikes[idx])
		.then(()=>{
			this.getBikes();
		})
		.catch((err)=>{
			console.log(err);
		})
	}
}
