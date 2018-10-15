import { Component } from '@angular/core';
import { SchoolsService } from '../services/aws.school.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html'
})
export class HomePage {

  public schools: any;
    
  constructor(private service :SchoolsService){
   this.schools  = service.getAll().subscribe(data => {
     console.log(data);
   });
  }
  
}
