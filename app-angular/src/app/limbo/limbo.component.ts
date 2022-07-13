import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-limbo',
  templateUrl: './limbo.component.html',
  styleUrls: ['./limbo.component.css']
})
export class LimboComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['gerenciar'])
  }

}
