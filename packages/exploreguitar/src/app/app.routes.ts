import { Route } from '@angular/router';
import { FretboardComponent } from '@exploreguitar/fretboard';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: FretboardComponent,
  },
];
