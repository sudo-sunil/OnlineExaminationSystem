import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';



import { HomePageComponent } from './Components/home-page/home-page.component';
import { RegisterPageComponent } from './Components/register-page/register-page.component';
import {LoginComponent} from './Components/login/login.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ReportCardComponent } from './Components/report-card/report-card.component';
import { ExamPageComponent } from './Components/exam-page/exam-page.component';
import { SearchStudentsComponent } from './Components/search-students/search-students.component';
import { AdminProfileComponent } from './Components/admin-profile/admin-profile.component';
import { AddQuestionsComponent } from './Components/add-questions/add-questions.component';
import { RemoveQuestionsComponent } from './Components/remove-questions/remove-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterPageComponent,
    LoginComponent,
    ResetPasswordComponent,
    ReportCardComponent,
    ExamPageComponent,
    SearchStudentsComponent,
    AdminProfileComponent,
    AddQuestionsComponent,
    RemoveQuestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
