import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input("title") title:string;
  constructor() { }

  ngOnInit() {

  }
  run(){
    console.log("我是header的run方法");
  }
}
