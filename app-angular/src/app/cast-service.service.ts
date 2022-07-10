import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CastServiceService {
  private activeUser = undefined;
  readonly CastAPI = "https://localhost:7082/api"
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  // Admin
  getAdmins():Observable<any[]>{
    return this.http.get<any>(this.CastAPI  + '/Admins')
  }

  getUser(): any {
   return this.activeUser;
 }

  login(value: any){
    this.activeUser = value;

  }

  logout(){
    this.activeUser = undefined
  }

// Cursos

 getCurso():Observable<any[]>{
    return this.http.get<any>(this.CastAPI  + '/Cursos')
  }

  addCurso(data:any):Observable<any>{
    return this.http.post(this.CastAPI + '/Cursos', data)
  }

  updateCurso(id: number|string, data:any){
    return this.http.put(this.CastAPI  + `/Cursos/${id}`, data)
  }

  deleteCurso(id: number|string){
    return this.http.delete(this.CastAPI + `/Cursos/${id}`);
  }

  // Categoria
  getCategoria():Observable<any[]>{
    return this.http.get<any>(this.CastAPI  + '/Categorias')
  }

  addCategoria(data:any):Observable<any>{
    return this.http.post(this.CastAPI + '/Categorias', data)
  }

  updateCategoria(id: number|string, data:any){
    return this.http.put(this.CastAPI  + `/Categorias/${id}`, data)
  }

  deleteCategoria(id: number|string){
    return this.http.delete(this.CastAPI + `/Categorias/${id}`);
  }


}

