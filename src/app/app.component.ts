import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
public flag:boolean = true;
  title = '慕容田雨';
  changeFlag(){
  
    this.flag=!this.flag;
  }
}

