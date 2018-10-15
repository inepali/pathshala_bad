import { Injectable } from '@angular/core';
import { DatabaseServiceBase } from './aws.database.base';
//import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/Observable"



@Injectable()
export class SchoolsService {
  schools : Observable<any> ;

  
  constructor(private service :DatabaseServiceBase) {
    
  }
  
  getAll() : Observable<any> {
    var params = {
      TableName: "schools"
    };

    const obj = new Observable((observer) => {
      this.service.db.scan(params, (err, data) => {
        return obj.next(err, data.Items);
      })
    })

    return obj;

      
    
  };







  


}