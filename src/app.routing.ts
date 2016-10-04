import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Home}        from './app/components/home/home';
import {Animations}  from './app/components/animations/animations';
import {Forms}       from './app/components/forms/forms';
import {Dialogs}     from './app/components/dialogs/dialogs';

const appRoutes: Routes = [
  { path: 'home',       component: Home,       },
  { path: 'forms',      component: Forms,      },
  { path: 'dialogs',    component: Dialogs,    },
  { path: 'animations', component: Animations, },
  { path: '',           component: Home,       },
  { path: '**',         component: Home,       },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
