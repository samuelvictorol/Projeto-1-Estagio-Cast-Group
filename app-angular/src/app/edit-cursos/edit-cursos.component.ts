import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CastServiceService } from '../cast-service.service';

@Component({
  selector: 'app-edit-cursos',
  templateUrl: './edit-cursos.component.html',
  styleUrls: ['./edit-cursos.component.css']
})
export class EditCursosComponent implements OnInit {
  curso: any
  categoriasMap:Map<number, string> = new Map();


  constructor(private router: Router, private service: CastServiceService) { }

  ngOnInit(): void {
    this.curso = this.service.getEditCurso()
  }

  edit(){
    alert(this.curso.dateInicio)
  }

}
