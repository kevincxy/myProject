import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})

export class FromComponent implements OnInit {
  // public usernam:string="123";
  public peopleInfo:any={
    username:"",
    sex:"0",
    cityList:["昆明","成都","厦门"],
    city:"成都",
    hibits:[
      {
        title:"吃饭",
        checked:false
        // value:"eatting"
      },{
        title:"睡觉",
        checked:false
        // value:"sleeping"
      },{
        title:"打豆豆",
        checked:true
        // value:"fightting"
      }
       ],
       remark:""
       
  }
  constructor() { }

  ngOnInit() {
  }
  doSubmit(){
    console.log(this.peopleInfo);
  }

}
