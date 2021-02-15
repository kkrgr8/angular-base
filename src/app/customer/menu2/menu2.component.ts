import { Component, OnInit } from '@angular/core';
import { AuthService } from  './../../services/restservices/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {
  public users : any;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(){  
    let user = {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
   }
    this.authService.getUsers().pipe(first())
    .subscribe(
      response => {
        this.users = response.data;
        console.log(this.users );
        // this.router.navigateByUrl('/customer');
      },
      error => {
          
      });
 } 

}
