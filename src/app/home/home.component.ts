import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {AuthService} from "../auth/auth.service";

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

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    if (this.formLogin.username && this.formLogin.password) {
      this.authService.login(this.formLogin);
    } else {
      alert('Nome e senha são obrigatórios')
    }
  }
}
