import { Routes } from '@angular/router';
import { CncRouter } from './cnc-router/cnc-router';
import { CurrentSense } from './current-sense/current-sense';
import { Home } from './home/home';
import { Jansen } from './jansen/jansen';
import { Skyjack } from './skyjack/skyjack';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'skyjack', component: Skyjack },
  { path: 'cnc-router', component: CncRouter },
  { path: 'jansen-linkage', component: Jansen },
  { path: 'current-sense', component: CurrentSense },
  { path: '**', redirectTo: '' },
];
