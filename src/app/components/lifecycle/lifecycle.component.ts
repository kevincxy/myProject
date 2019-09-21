import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {
  public msg:string="我是msg";
  public userInfo:string ="";
  public oldUserInfo:string ="";

  @Input("title") title:string;
  
  constructor() { 
    console.log("00构造函数执行");
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //Add '${implements OnChanges}' to the class.
    
  // }
  
  ngOnChanges(){
    console.log("01父子组件传值时会触发")
  }
  ngOnInit() {
    console.log("02Angular数据绑定和组件初始化时触发");
  }
  ngDoCheck(){
    if(this.oldUserInfo!=this.userInfo){
      console.log(`userinfo从${this.oldUserInfo}变化到${this.userInfo}`);
      this.oldUserInfo=this.userInfo;
    }else{
      console.log("userinfo没有改变");
     
    }
      console.log("03Angular无法和不愿进行的检查，紧随ngOnChanges() 和ngOnInit()调用！");
  }
  ngAfterContentInit() {
    console.log("04当Angular把外部内容投影进组件/指令的视图时调用!")
  
  }
  ngAfterContentChecked() {
   console.log("05当Angular外部内容变更时调用");
  
  }
  ngAfterViewInit() {
    console.log("06dom加载完成后调用，可以在这个方法里执行dom操作，同$.function(){}");
    
  }
  ngAfterViewChecked(): void {
    
    console.log("07每当 Angular 完成被投影组件内容的变更检测之后调用。ngAfterContentInit() 和每次 ngDoCheck() 之后调用");
  }
  ngOnDestroy() {
   console.log("08每当组件卸载时，触发！");
    
  }
  //自定义方法
  msgChange(){
    this.msg="改变后的值";
  }

}
