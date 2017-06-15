import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardtestComponent } from './../pages/authguardtest/authguardtest.component';

const AppRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'authguardtest', canActivate: },
    { path: 'authguardtest', component: AuthguardtestComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(AppRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}




