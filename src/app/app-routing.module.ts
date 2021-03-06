import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionSummaryComponent } from './sessions/sessionSummary/session-summary.component';
import { SessionsComponent } from './sessions/sessions.component';
import { ProfilComponent } from './profil/profil.component';
import { CreateProfilComponent } from './create-profil/create-profil.component';
import { CreateSessionComponent } from './create-session/create-session.component';
import { MySessionComponent } from './my-session/my-session.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SujetComponent } from './sujet/sujet.component';
import { ModuleLearningComponent } from './module-learning/module-learning.component';
import { DetailModuleComponent } from './module-learning/detail-module/detail-module.component';
import { DemandeSessionsComponent } from './demande-sessions/demande-sessions.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { EditSujetComponent } from './edit-sujet/edit-sujet.component';

const routes: Routes = [

  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  {
    path: '',
    redirectTo: 'sujets',
    pathMatch: 'full'
  },

  {
    path: 'sujets',
    canActivate: [AuthGuardService],
    component: SujetComponent,
  },
  {
    path: 'sujets/:sujet',
    canActivate: [AuthGuardService],
    component: ModuleLearningComponent,


    // canLoad: [AuthGuard]
  },
  {
    path: 'sujets/:sujet/detail/:id',
    canActivate: [AuthGuardService],
    component: DetailModuleComponent
  },
  {
    path: 'administration/sujets',
    canActivate: [AuthGuardService],
    component: EditSujetComponent
    // canLoad: [AuthGuard]
  },
  {
    path: 'sessions',
    canActivate: [AuthGuardService],
    component: SessionsComponent,
    children: [
      {
        path: 'detailView',
        component: SessionSummaryComponent
        // canLoad: [AuthGuard]
      },
    ]
    // canLoad: [AuthGuard]
  },
  {
    path: 'profil',
    canActivate: [AuthGuardService],
    component: ProfilComponent
    // canLoad: [AuthGuard]
  },
  {
    path: 'demandes',
    canActivate: [AuthGuardService],
    component: DemandeSessionsComponent
    // canLoad: [AuthGuard]
  },
  {
    path: 'createProfil',
    canActivate: [AuthGuardService],
    component: CreateProfilComponent
    // canLoad: [AuthGuard]
  },
  {
    path: 'createSession',
    canActivate: [AuthGuardService],
    component: CreateSessionComponent
    // canLoad: [AuthGuard]
  },
  {
    path: 'mySession',
    canActivate: [AuthGuardService],
    component: MySessionComponent
    // canLoad: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'Error_404',
    pathMatch: 'full'
  },
  {
    path: 'Error_404',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
