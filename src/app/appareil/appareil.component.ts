import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() Event: string;
  @Input() Date: string;

  constructor() { }

  ngOnInit(): void {
  }

  getDAte() {
    return this.Date;
  }
  getColor() {
    if(this.Date === 'allumé') {
      return 'green';
    } else if(this.Event === 'éteint') {
      return 'red';
    }
}

}
