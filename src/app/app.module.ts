import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StudentService } from './services/student.service';

import { MaterialModule } from './app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { StudentsComponent } from './components/students/students.component';
import { StudentComponent } from './components/students/student/student.component';
import { StudentListComponent } from './components/students/student-list/student-list.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { StudentInputComponent } from './components/students/student-input/student-input.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentComponent,
    StudentListComponent,
    LayoutsComponent,
    HeaderComponent,
    StudentInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,

    MaterialModule,
    FlexLayoutModule

  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
