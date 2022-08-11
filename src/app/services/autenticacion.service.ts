import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url = "http://localhost:4200/";
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient) {

    console.log("EL SERVICIO DE AUTH ESTA CORRIENDO..");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || ''));
   }

   IniciarSesion(){}
}
