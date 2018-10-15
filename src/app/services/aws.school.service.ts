import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import "rxjs/add/operator/map";
import "rxjs/add/operator/take";
import { DatabaseServiceBase } from './aws.database.base';



@Injectable()
export class SchoolsService {
  
  constructor(private service :DatabaseServiceBase) {
    
  }
  
  getAllSchools() : any {
    var params = {
      TableName: "schools"
    };

    this.service.db.scan(params, (error, result) => {
      return result;
    });
  }
  

}