import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { InsiderComponent } from './insider/insider.component';
import { ResearchVaultComponent } from './research-vault/research-vault.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { HomeComponent } from './home/home.component';
import { PickRateComponent } from './pick-rate/pick-rate.component';
import { FmlBuxComponent } from './fml-bux/fml-bux.component';
import { BoxOfficeComponent } from './box-office/box-office.component';
import { TheatersComponent } from './theaters/theaters.component';
import { BestPerformersComponent } from './best-performers/best-performers.component';
import { HowtoPlay2Component } from './howto-play2/howto-play2.component';
import { FaqComponent } from './faq/faq.component';
import { ContestComponent } from './contest-rules/contest.component';

const appRoutes: Routes = [  
  {path: 'home', component: HomeComponent},
  {path: 'leagues', component: LeaguesComponent},
  {path: 'insider', component: InsiderComponent},

 {path: 'research-vault', component:  ResearchVaultComponent,
   children: [
   {path :'box-office', component:BoxOfficeComponent},
   {path :'best-performers', component:BestPerformersComponent},
   {path :'theaters', component:TheatersComponent},
   {path :'fml-bux', component:FmlBuxComponent},
   {path :'pick-rate', component:PickRateComponent}
 ]} ,
  {path: 'how-to-play', component: HowToPlayComponent,
   children: [
    {path: 'contest-rules', component: ContestComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'howto-play2', component:HowtoPlay2Component}
  ]},
  {path: 'login', component: LoginComponent},
  {path: '',redirectTo: '/home',pathMatch:'full'},   
  {path: '**',redirectTo: '/home',pathMatch:'full'},

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LeaguesComponent,
    InsiderComponent,
    ResearchVaultComponent,
    HowToPlayComponent,
    HomeComponent,
    PickRateComponent,
    FmlBuxComponent,
    BoxOfficeComponent,
    TheatersComponent,
    BestPerformersComponent,
    HowtoPlay2Component,
    FaqComponent,
    ContestComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
     RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
