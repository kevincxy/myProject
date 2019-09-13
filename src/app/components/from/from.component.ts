import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})

export class FromComponent implements OnInit {
  // public usernam:string="123";
  public peopleList:any={
    username:""
  }
  constructor() { }

  ngOnInit() {
  }
  doSubmit(){
    console.log(this.peopleList.username);
  }

}
