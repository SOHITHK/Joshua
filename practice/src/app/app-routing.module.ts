import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path:"",redirectTo:"home",pathMatch:"full"
  },
  {
    path: 'patient',
    loadChildren: () => import('./@modules/patient/patient.module').then(m => m.PatientModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
