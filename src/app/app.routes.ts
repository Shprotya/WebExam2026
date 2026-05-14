import { Routes } from '@angular/router';

import { Countries } from './countries/countries';
import { About } from './about/about';

export const routes: Routes = [
    { path: '', component: Countries },
    { path: 'about', component: About }
];
