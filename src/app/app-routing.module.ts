import { NgModule } from '@angular/core';
import {CanActivateFn, RouterModule, Routes} from '@angular/router';
import {ShowUsersComponent} from "./show-users/show-users.component";
import {CountToTenComponent} from "./count-to-ten/count-to-ten.component";
import {ParentChoiceComponent} from "./parent-choice/parent-choice.component";
import {StoreDrivenCounterComponent} from "./store-driven-counter/store-driven-counter.component";
import {SimpleFormComponent} from "./simple-form/simple-form.component";
import {ReactiveFormComponent} from "./reactive-form/reactive-form.component";


export const authGuard: CanActivateFn = (route, state)=>{
  return true;
};

const routes: Routes = [
  { path: 'users', component: ShowUsersComponent },
  { path: 'store', component: StoreDrivenCounterComponent },
  { path: 'count', component: CountToTenComponent, canActivate: [authGuard] },
  { path: 'simpleform', component: SimpleFormComponent },
  { path: 'reactiveform', component: ReactiveFormComponent },
  { path: '', component: ParentChoiceComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
