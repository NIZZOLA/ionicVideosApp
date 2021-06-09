import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IListaFilmes } from '../models/IListaFilmes.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  lingua = 'pt-BR';
  regiao = 'BR';

  private apiURL = environment.filmesApiURL;
  private key = `?api_key=${environment.filmesApiKey}`

  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarFilmes(busca: string, tipo: string): Observable<IListaFilmes> {
    const url = `${this.apiURL}search/${tipo}${this.key}&language=${this.lingua}&region=${this.regiao}&query=${busca}`;

    return this.http.get<IListaFilmes>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  async exibirErro(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar a API!',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }
}
