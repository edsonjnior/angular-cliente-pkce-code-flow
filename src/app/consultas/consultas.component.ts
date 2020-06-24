import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  resourceUrl = 'http://localhost:8080/consultas';
  consultas = [];

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.getResource(this.resourceUrl)
      .subscribe(data => this.consultas = data, error => console.log(error));
  }
}
