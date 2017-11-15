import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  onSubmit(formLogin: NgForm) {

    console.log(formLogin);

  }

  constructor() { }

  ngOnInit() {
  }

}
