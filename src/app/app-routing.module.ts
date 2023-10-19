import { NgModule } from '@angular/core';
import {CanActivateFn, RouterModule, Routes} from '@angular/router';
import {ShowUsersComponent} from "./service-call/show-users.component";
import {CountToTenComponent} from "./structural-directive/count-to-ten.component";
import {ParentChoiceComponent} from "./parent-component/parent-choice.component";
import {StoreDrivenCounterComponent} from "./ngrx-store/store-driven-counter.component";
import {TemplateFormComponent} from "./template-form/template-form.component";
import {ReactiveFormComponent} from "./reactive-form/reactive-form.component";
import {PageNotFoundComponent} from "./routing/page-not-found/page-not-found.component";


export const authGuard: CanActivateFn = (route, state)=>{
  return true;
};

const routes: Routes = [
  { path: 'users', component: ShowUsersComponent },
  { path: 'store', component: StoreDrivenCounterComponent },
  { path: 'count', component: CountToTenComponent, canActivate: [authGuard] },
  { path: 'simpleform', component: TemplateFormComponent },
  { path: 'reactiveform', component: ReactiveFormComponent },
  {path: 'child', loadChildren: () => import('./child-module/child-module.module').then(mod => mod.ChildModuleModule)},
  { path: '', component: ParentChoiceComponent },
  { path: '**', component: PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
