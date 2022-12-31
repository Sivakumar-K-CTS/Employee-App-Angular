import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private _router:Router, private _service:AuthService) { }

  viewModifier!:number;
  ngOnInit(): void {
  }

  onClick=()=>{
    this._service.logout();

    }
    backToHome(){
      this._router.navigate(['/employee-view'])
    }

    viewChooser(){
      if(this.viewModifier==1){
        this.viewModifier=0;
        this._router.navigate(['/employee-grid'])
        
      }else{
        this.viewModifier=1;
        this._router.navigate(['/employee-view'])
      }
    }

}
