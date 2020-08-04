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
    username: '',
    password: ''
  }

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.handleLogin();
  }
}
