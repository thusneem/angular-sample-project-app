import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe,formatDate } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TaskFormComponent } from './Tasks/task-form/task-form.component';
import { TaskListComponent } from './Tasks/task-list/task-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   
    CommonModule,                            
    ReactiveFormsModule,
    HttpClientModule  
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
