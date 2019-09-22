import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
public title:string= "首页组件title";
//获取子组件的实体
@ViewChild("header",{static:true}) header:any;

  constructor() { }

  ngOnInit() {
  }

  check(e){
    alert(e);
    alert("我是父组件里的check方法！");
    
  }
  //获取子组件的msg值
  getChildMsg(){
    console.log(this.header.msg);
  }
  //执行子组件方法
  execChildRun(){
    this.header.run();
  }


}
