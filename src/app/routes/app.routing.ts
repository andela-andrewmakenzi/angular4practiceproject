import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { AuthguardtestComponent } from './../pages/authguardtest/authguardtest.component';
import { RestrictedaccessComponent } from './../pages/restrictedaccess/restrictedaccess.component';
import { BallfollowmouseComponent } from '../pages/ballfollowmouse/ballfollowmouse.component';

// services
import { AuthGuard } from './../services/auth-guard.service';

const AppRoutes: Routes = [
    { path: '', pathMatch: 'full', component: AuthguardtestComponent, canActivate: [ AuthGuard ]},
    { path: 'authguardtest', component: AuthguardtestComponent},
    { path: 'restrictedaccess', component: RestrictedaccessComponent},
    { path: 'ballmouse', component: BallfollowmouseComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(AppRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
