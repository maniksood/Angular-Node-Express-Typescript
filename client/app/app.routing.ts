import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: 'app', component: AppComponent },

  { path: '**', redirectTo: '/app', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);
