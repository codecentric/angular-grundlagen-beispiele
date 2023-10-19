import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildModuleRoutingModule } from './child-module-routing.module';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    ChildComponent
  ],
  imports: [
    CommonModule,
    ChildModuleRoutingModule
  ]
})
export class ChildModuleModule { }
