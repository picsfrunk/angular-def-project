import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { AboutComponent } from "./components/about/about.component";
import { PageNotFoundComponent } from "./components/common/page-not-found/page-not-found.component";
import {CarouselComponent} from "./components/common/carousel/carousel.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'c', component: CarouselComponent },
  { path: '**', component: PageNotFoundComponent },
];
