import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CastServiceService } from '../cast-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: CastServiceService, private router: Router) { }

  ngOnInit(): void {

  }


}
