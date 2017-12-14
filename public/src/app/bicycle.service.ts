import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BicycleService {

  constructor(private _http: Http) { }

	register(user){
		return this._http.post('/api/register', user).map(res=>res.json()).toPromise();
	}
	login(user){
		console.log("in service's login method,", user);
		return this._http.post('/api/login', user).map(res=>res.json()).toPromise();
	}
	logout(){
		return this._http.get('/api/logout').map(res=>res.json()).toPromise();
	}
	getCurrent(){
		return this._http.get('/api/currentuser').map(res=>res.json()).toPromise();
	}
	getInfo(user_id){
		return this._http.post('/api/info', user_id).map(res=>res.json()).toPromise();
	}
	getRandom(){
		return this._http.get('/api/randombike').map(res=>res.json()).toPromise();
	}
	getAllBikes(){
		return this._http.get('/api/bicycles').map(res=>res.json()).toPromise();
	}
	getAllUserBikes(){
		return this._http.get('/api/mybicycles').map(res=>res.json()).toPromise();
	}
	addBike(bike){
		return this._http.post('/api/bicycle', bike).map(res=>res.json()).toPromise();
	}
	updateBike(bike){
		return this._http.post('/api/bicycle/edit',bike).map(res=>res.json()).toPromise();
	}
	deleteBike(bike){
		return this._http.post('/api/bicyle/destroy', bike).map(res=>res.json()).toPromise();
	}
}
