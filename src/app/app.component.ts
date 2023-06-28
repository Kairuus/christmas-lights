import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit{



  ngOnInit(): void {

  }

  turnOn(){
    let container = document.querySelector('.container')
    container?.classList.add('on')
  }

  turnOff(){
    let container = document.querySelector('.container')
    container?.classList.remove('on')
  }

}

