import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: StartComponent },
  { path: 'Ula-Zadania', pathMatch: 'full', component: StartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
