import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CastServiceService } from '../cast-service.service';

@Component({

  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginSuccess!:boolean
  loginFailed! : boolean
  constructor(private service: CastServiceService, private router: Router) { }

  ngOnInit(): void {
    this.loginSuccess = false
    this.loginFailed = false
  }

  logar(){
    this.service.setAdminLogado(!false) // testar logica
    if(this.service.getAdminLogado() == true){
      this.loginSuccess = true
      setTimeout(() => {
        this.router.navigate(['gerenciar'])
      }
      , 2000)
    }else{
      this.loginFailed = true
      setTimeout(() => {
        location.reload()
      }
      , 2000)
    }

  }

}
