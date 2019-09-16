import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todoValue:string="";
  public todoList:any[]=[];
  constructor() { }

  ngOnInit() {
  }
  addTodo(){
    if(this.todoValue==undefined||this.todoValue==""){
      alert("当前任务不可为空！")
      this.todoValue="";
      return;
    }
    console.log(this.todoValue);
    var flag:boolean =this.todoListisHaskeyword(this.todoList,this.todoValue);
    if(flag){
      alert("当前任务已存在！")
      this.todoValue="";
      return;
    }
    this.todoList.push(
      {
        title:this.todoValue,
        status:0
      });
    console.log(this.todoList);
    this.todoValue="";
  }
del(index){
   //删除代办事项
   this.todoList.splice(index,1);
}
  // checked(index){
  //   //添加已完成项
  //   this.todoList.push({
  //     title:this.todoList[index],
  //     status:1
  //   });
  //   //删除代办事项
  //   this.todoList.splice(index,1);
   
  // }
  todoListisHaskeyword( todoList:any,keyword:any){
    //异步，会存在问题
    // todoList.forEach(value => {
    //   if(value==keyword){
    //     return true;
    //   }
    // });
    for (var i = 0,count=todoList.length;i<count;i++){
      if(todoList[i].title==keyword){
        return true;
      }
    }
    return false;
  }
}

