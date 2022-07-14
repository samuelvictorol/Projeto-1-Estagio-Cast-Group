import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CastServiceService } from '../cast-service.service';

@Component({
  selector: 'app-edit-cursos',
  templateUrl: './edit-cursos.component.html',
  styleUrls: ['./edit-cursos.component.css']
})
export class EditCursosComponent implements OnInit {
  curso: any
  categoriaList: any = []
  categoriaList$!: Observable<any[]>
  categoriasMap:Map<number, string> = new Map();
  dataInicio: any
  dataTermino: any

  constructor(private router: Router, private service: CastServiceService) { }

  ngOnInit(): void {
    this.curso = this.service.getEditCurso()
    this.dataInicio = this.curso.dateInicio
    this.dataTermino = this.curso.dateTermino
    this.categoriaList$ = this.service.getCategoria()
    this.refreshCategoriaMap()
  }

  refreshCategoriaMap(){
    this.service.getCategoria().subscribe(data => {
      this.categoriaList = data
      for(let i = 0; i < data.length; i++){
        this.categoriasMap.set(this.categoriaList[i].id, this.categoriaList[i].nomeCategoria)
      }
    })
  }

  edit(){
    const dataValida = this.service.validarData(this.curso)

    if(this.curso.descricao == undefined || this.curso.descricao == ''){
      alert('Campo Descrição é Obrigatório')
      return
    }

    if(this.curso.categoriaId == undefined) {
      alert('Selecione uma categoria')
      return
    }


    if(dataValida){
      this.service.updateCurso(this.curso.id, this.curso).subscribe(() =>{
        setTimeout(() => {
          alert("Curso Editado com sucesso")
          this.router.navigate(['limbo'])
        }
        , 1500)
      })
    }
  }

  voltar(){
    this.router.navigate(['gerenciar'])
  }

}
