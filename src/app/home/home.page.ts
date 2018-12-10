
import { Component } from '@angular/core';
import { SchoolService } from '../services/school.service';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html'
})
export class HomePage {

  public schools: Observable<any[]>;
  public email: string;
  private password: string;
    
  constructor(private service : SchoolService, private loginService : LoginService){
   
    this.getAllSchools();
   
   
  }
  

  getAllSchools() : any {


    this.service.getAllSchools().subscribe((data) => {
      this.schools = data;  
      console.log( this.schools);
    });
    
    };

  signInWithEmailAndPassword()
  {

  }


  }
