import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DataBidingComponent implements OnInit {

  url: String  = 'http://loiane.com';
  urlImagem  =  'http://lorempixel.com/400/200/'

  getvalor(){
    return 10;
  }

  cursoAngular: boolean = true;

  getCurtirCurso(){
     return true;
  }

  botaoClicado(){
    alert("sucess");
  }


  constructor() { }

  ngOnInit() {
  }

}
