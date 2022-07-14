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
    this.refreshCategoriaMap()
    this.showAdd = false /// trocar quando finalizar add-edit
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

  edit(curso:any){
    this.service.setEditCurso(curso)
    this.router.navigate(['edit'])
  }

  deletar(id: number|string, curso:any){
    let cursoTermino = new Date(curso.dateTermino.substring(0, curso.dateTermino.length - 9))
    let dataTermino = new Date(cursoTermino)
    let dataHj = new  Date()

    if(dataTermino.getTime() < dataHj.getTime() ){
      alert('Proibido deletar um curso já realizado')
      return
    }

    const result = window.confirm('Deseja mesmo deletar esse item ?')

    if(result) this.service.deleteCurso(id).subscribe((resultado)=>setTimeout(()=> {
      this.router.navigate(['limbo']) // gambiarra pra nao fazer logout quando reiniciar a pagina com location.reload() kkkjj
    },1500)
  )
  }

}
