import { DatabaseServiceBase } from '../services/aws.database.base';
import { Component } from '@angular/core';
//import { SchoolsService } from '../services/aws.school.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html'
})
export class HomePage {

  public allSchools: any;
    
  constructor( private service : DatabaseServiceBase){
   
    this.getAllSchools();
   
   
  }
  

  getAllSchools() : any {
    var params = {
      TableName: "schools"
    };

    this.service.db.scan(params, (error, result) => {
      console.log(result);
      return result;
    });
  }
}
