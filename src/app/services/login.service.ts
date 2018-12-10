import { Injectable, } from '@angular/core';
import { Observable } from 'rxjs';
import { ENV } from '../../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication';



@Injectable()
export class LoginService {

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }


    constructor(private http: HttpClient, private firebaseAuthentication: FirebaseAuthentication) {

    }

    facebookLogin() {

    }

    googleLogin() {

    }

    login() {

    }

    createUserWithEmailAndPassword(email, password) {
        return this.firebaseAuthentication.createUserWithEmailAndPassword(email, password);

        //    .then((res: any) => console.log(res))
        //    .catch((error: any) => console.error(error));
    }


}