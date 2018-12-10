import { Injectable, } from '@angular/core';
import { Observable } from 'rxjs';
import { ENV } from '../../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()
export class SchoolService {

  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  }

  schools: Observable<any>;

  constructor(private http: HttpClient) {

  }

  getAllSchools(): any {
    var url = ENV.apiHost + "School";

    
    return this.http.get(url, { headers: this.headers });

    // return this.http.get(url, { headers: this.headers }).subscribe((response) => {

    //   console.log(response);
    //   return response;
    // })


  }


}