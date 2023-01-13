import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthComponent } from './auth/auth.component';
import { ConditionsActuellesComponent } from './conditions-actuelles/conditions-actuelles.component';
import { ProchainesHeuresComponent } from './prochaines-heures/prochaines-heures.component';
import { WeatherComponent } from './weather/weather.component';
import { ProchainsJoursComponent } from './prochains-jours/prochains-jours.component';

const routes: Routes = [
  //On redirige / vers /weather
  {path:'',pathMatch:'full', redirectTo:'weather'},

  //canActivate: [AuthGuard] permet de bloquer une route si l'utilisateur n'est pas login  
  {path:'weather', component: WeatherComponent, canActivate: [AuthGuard]},
  {path:'weather/conditionsActuelles', component: ConditionsActuellesComponent, canActivate: [AuthGuard] },
  {path:'weather/prochainesHeures', component: ProchainesHeuresComponent, canActivate: [AuthGuard] },
  {path:'weather/prochainsJours', component: ProchainsJoursComponent, canActivate: [AuthGuard] },

  //Route pour la page d'authentification
  {path:'auth', component: AuthComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
