import { Component, OnInit,ViewChild } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient, HttpHandler,HttpHeaders } from '@angular/common/http';
import { resource } from 'selenium-webdriver/http';
// import  axios from 'axios';
import { HttpserviceService} from '../../services/httpservice.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {
  public flag:boolean = true;
  @ViewChild('mybox',{ static: true }) mybox:any;
  @ViewChild('header',{ static:true }) header:any;
  public userList:any[]=[];
  //引入httpClient
  constructor(public http:HttpClient,public httpService:HttpserviceService) { }

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

   this.mybox.nativeElement.style.width="60px";
   this.mybox.nativeElement.style.height ="60px";

    this.mybox.nativeElement.style.background = "red";
    console.log(this.mybox.nativeElement.innerHTML);


    this.header.run();

  }
  //rxjs
  getData(){
    var url:string="http://localhost:8081/TimeRecord/user/getUserById/1";
    this.http.get(url).subscribe((response:any)=>{
      console.log(response);
    });
  }

  postData(){
    const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    var url:string = "http://localhost:8081/TimeRecord/user/getUserByCondition";
    var bodyParam ={
      "pageNum":1,
      "pageSize":5
    };
    
    this.http.post(url,bodyParam).subscribe((response:any)=>{
      this.userList = response.result;
      console.log(this.userList);
    });
  }
  //通过jsonp获取服务器数据(跨域的一种解决方法)
  getJsonpData(){
    // alert("jsonp");
    let url:string = "http://localhost:8081/TimeRecord/user/getUserById/1";
    // this.http.jsonp(url,);
    
  }
  getAxiosData(){
    alert("axios")
    let url:string = "http://localhost:8081/TimeRecord/user/getUserById/1";
    this.httpService.axiosGet(url).then((data)=>{
        console.log(data);
    });
  }
  
}
