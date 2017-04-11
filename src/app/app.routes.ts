import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HowtoComponent } from './howto/howto.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'howto', component: HowtoComponent }
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
