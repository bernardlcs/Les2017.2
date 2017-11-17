import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-user',
  templateUrl: './cadastro-user.component.html',
  styleUrls: ['./cadastro-user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CadastroUserComponent implements OnInit {


  onFormSubmCad(userFormCad: NgForm) {
    console.log(userFormCad);

  }

  constructor() { }

  ngOnInit() {
  }

}
