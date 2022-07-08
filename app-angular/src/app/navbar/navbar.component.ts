import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CastServiceService } from '../cast-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loadLogout!:boolean
  user!: string;
  constructor(private router:Router, private service: CastServiceService) { }

  ngOnInit() {
    this.loadLogout = false;
    this.user = this.service.userAdmin

  }


  logout(){
    this.loadLogout = true;
    setTimeout(() =>{
      this.router.navigate([''])
    }, 2000);
  }

  gerenciar(){
    this.router.navigate(['gerenciar'])
  }

  logs(){
    this.router.navigate(['logs'])
  }


}
