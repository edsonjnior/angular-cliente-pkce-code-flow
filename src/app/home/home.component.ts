import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {AppService} from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formLogin: User = {
    username: 'admin@mail.com',
    password: 'admin'
  }

  constructor(private appService: AppService) {
  }

  ngOnInit() {
  }

  login(): void {
    if (this.formLogin.username && this.formLogin.password) {
      this.appService.retriveToken(this.formLogin);
    } else {
      alert('Nome e senha são obrigatórios')
    }
  }
}
