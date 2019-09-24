import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FromComponent } from './components/from/from.component';
import { SearchComponent } from './components/search/search.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
//如果使用双向数据绑定，需要引入form组件
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
//引入一个服务
import {StoreageService} from './services/storeage.service';
import { AsynchronousService } from './services/asynchronous.service';


import { SportComponent } from './components/sport/sport.component';
import { TransitionComponent } from './components/transition/transition.component';
import { PageComponent } from './components/page/page.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HeaderComponent,
    HomeComponent,
    FromComponent,
    SearchComponent,
    TodoListComponent,
    SportComponent,
    TransitionComponent,
    PageComponent,
    LifecycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  //服务声明
  providers: [StoreageService,AsynchronousService],
  bootstrap: [AppComponent]
})
export class AppModule { }
