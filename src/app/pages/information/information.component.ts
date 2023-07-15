import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  public titleH1: string = 'Informação';
  public titleH2: string = 'Características dos Personagens';

  constructor() { }

  ngOnInit(): void {
  }

}
