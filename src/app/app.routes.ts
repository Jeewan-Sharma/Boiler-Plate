import { Routes } from '@angular/router';
import { AppLayoutComponent } from './blocks/components/app-layout/app-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/main/main.module').then((m) => m.MainModule)
      },
    ]
  },
  {
    path: "auth",
    loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule),
  }
];
