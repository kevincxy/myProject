import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {
  public flag:boolean = true;
  @ViewChild('mybox',{ static: true }) mybox:any;
  @ViewChild('header',{ static:true }) header:any;
  constructor() { }

  ngOnInit() {
    //这里是组件和指令初始化完毕，并不是真正的dom加载完毕
     //不推荐
     /*
    let box:any = document.getElementById("box");
    box.style.color ="red";
    let box1:any = document.getElementById("box1");
    box1.style.color ="blue";
    */
  }
  //视图加载完成后触发的时间，dom加载完成
  ngAfterViewInit(): void {
    let box:any = document.getElementById("box");
    box.style.color ="red";
    let box1:any = document.getElementById("box1");
    box1.style.color ="blue";

   this.mybox.nativeElement.style.width="100px";
   this.mybox.nativeElement.style.height ="100px";

    this.mybox.nativeElement.style.background = "red";
    console.log(this.mybox.nativeElement.innerHTML);



    this.header.run();
  }
}
