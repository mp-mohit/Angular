import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'setting',
    loadChildren: () =>
      import('../setting/setting.module').then((m) => m.SettingModule),
  },
  {
    path: 'user',
    loadChildren: () => import('../user/user.module').then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminLayoutRoutingModule {}
