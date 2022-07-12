import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CastServiceService } from '../cast-service.service';

@Component({
  selector: 'app-gerenciar',
  templateUrl: './gerenciar.component.html',
  styleUrls: ['./gerenciar.component.css']
})
export class GerenciarComponent implements OnInit {
  cursosList$!: Observable<any[]>
  categoriaList$!: Observable<any[]>
  categoriaList: any = []
  showAdd!: boolean
//Map para associar as tabelas
  categoriasMap:Map<number, string> = new Map();


  constructor(private service: CastServiceService, private router: Router) { }

  ngOnInit(): void {
    this.cursosList$ = this.service.getCurso()
    this.categoriaList$ = this.service.getCategoria()
    this.refreshCategoriaMap()
    this.showAdd = true /// trocar quando finalizar add-edit
  }

  refreshCategoriaMap(){
    this.service.getCategoria().subscribe(data => {
      this.categoriaList = data
      for(let i = 0; i < data.length; i++){
        this.categoriasMap.set(this.categoriaList[i].id, this.categoriaList[i].nomeCategoria)
      }
    })
  }

  addBtn(){
    this.showAdd = !this.showAdd

  }


}
