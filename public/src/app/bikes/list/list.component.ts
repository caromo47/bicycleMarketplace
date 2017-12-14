import { Component, OnInit } from '@angular/core';
import { User } from '../../User';
import { Bike } from '../../Bike';
import { BicycleService } from '../../bicycle.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	allBikes: Array<Bike>;

  constructor(private _bicycleservice: BicycleService) { }

  ngOnInit() {
		this.getAllBikes();
  }

	getAllBikes(){
		this._bicycleservice.getAllBikes()
		.then((bikes)=>{
			this.allBikes = bikes;
		})
		.catch((err)=>{
			console.log(err)
		})
	}
	deleteBike(bike){
		this._bicycleservice.deleteBike(bike)
		.then(()=>{
			this.getAllBikes();
		})
		.catch((err)=>{
			console.log(err);
		})
	}
}
