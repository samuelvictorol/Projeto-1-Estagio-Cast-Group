import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CastServiceService {
  private AdminLogado! : boolean
  userAdmin = 'samuel123'
  constructor() { }

  ngOnInit() {
    this.AdminLogado = false
  }

  setAdminLogado(setLogado:boolean) {
    this.AdminLogado = setLogado
  }

  getAdminLogado() {
    return this.AdminLogado
  }

}

