import { IFilme } from './../models/IFilmes.models';
import { DadosService } from './../../service/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-filme',
  templateUrl: './dados-filme.page.html',
  styleUrls: ['./dados-filme.page.scss'],
})
export class DadosFilmePage implements OnInit {

  filme: IFilme;

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.filme = this.dadosService.obterDados('filme');
    console.log('Filme Enviado', this.filme);
  }

}