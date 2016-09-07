import { provideRouter, RouterConfig} from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component'
import { AboutComponent } from './components/pages/about/about.component'

const routes : RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];

// Issues with router version!!
