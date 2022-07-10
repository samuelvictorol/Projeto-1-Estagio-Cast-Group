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
  adminsList: any = []
  username = ''
  password = ''
  constructor(private service: CastServiceService, private router: Router) { }

  ngOnInit(): void {
    this.loginSuccess = false
    this.loginFailed = false
  }



logar(){
  this.service.getAdmins().subscribe((data) => {
    this.adminsList = data
    for (let i = 0; i < data.length; i++) {
      if(this.adminsList[i].username == this.username && this.adminsList[i].password == this.password){
        this.loginSuccess = true
        this.service.login(this.adminsList[i])
        setTimeout(() => {
          this.router.navigate(['gerenciar'])
        }
        , 3000)
        return
      }
    }
  if(!this.loginSuccess){
    this.loginFailed = true
    setTimeout(() => {
      location.reload()
    }
    , 2000)

  }

  })
  }

}
