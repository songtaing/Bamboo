import { Routes } from '@angular/router';
import { NewsDashboardComponent } from './news/news-dashboard/news-dashboard.component';
import { LatestNewsComponent } from './news/latest-news/latest-news.component';
import { ProjMgmtDashboardComponent } from './project-management/proj-mgmt-dashboard/proj-mgmt-dashboard.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'news',
  },
  {
    path: 'news',
    pathMatch: 'full',
    loadComponent: () =>
      import('./news/news-dashboard/news-dashboard.component').then(
        (c) => c.NewsDashboardComponent
      ),
  },
  {
    path: 'news/latest',
    pathMatch: 'full',
    loadComponent: () =>
      import('./news/latest-news/latest-news.component').then(
        (c) => c.LatestNewsComponent
      ),
  },
  {
    path: 'pm/dashboard',
    pathMatch: 'full',
    loadComponent: () =>
      import(
        './project-management/proj-mgmt-dashboard/proj-mgmt-dashboard.component'
      ).then((c) => c.ProjMgmtDashboardComponent),
  },
  {
    path: 'reminders',
    pathMatch: 'full',
    loadComponent: () =>
      import(
        './reminders/reminders-dashboard/reminders-dashboard.component'
      ).then((c) => c.RemindersDashboardComponent),
  },
  {
    path: 'finances',
    pathMatch: 'full',
    loadComponent: () =>
      import('./finances/finance-dashboard/finance-dashboard.component').then(
        (c) => c.FinanceDashboardComponent
      ),
  },
];
