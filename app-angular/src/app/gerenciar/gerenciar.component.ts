import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CastServiceService } from '../cast-service.service';

@Component({
  selector: 'app-gerenciar',
  templateUrl: './gerenciar.component.html',
  styleUrls: ['./gerenciar.component.css']
})
export class GerenciarComponent implements OnInit {
  user!: string;
  loadLogout!:boolean
  constructor(private service: CastServiceService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.service.userAdmin
    this.loadLogout = false;
  }


  logout(){
    this.loadLogout = true;
    setTimeout(() =>{
      this.router.navigate([''])
    }, 2000);
  }

}
