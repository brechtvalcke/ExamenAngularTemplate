
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components


// routing Const

const routes: Routes = [
/*     {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: MainComponent , children: PROTECTED_ROUTES, canActivate: [LoggedInGuard]},
    {path: '', component: NavigationLoggedOutComponent, outlet: 'header'},
    {path: 'landing', component:  LandingComponent, pathMatch: 'full'} */
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
