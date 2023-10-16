import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MytextfieldComponent} from './mytextfield/mytextfield.component';
import {MakechoiceComponent} from './makechoice/makechoice.component';
import {MakegreenDirective} from './shared/makegreen.directive';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {ShowUsersComponent} from './show-users/show-users.component';
import {RouterOutlet} from "@angular/router";
import {CountToTenComponent} from './count-to-ten/count-to-ten.component';
import {AppRoutingModule} from "./app-routing.module";
import { ParentChoiceComponent } from './parent-choice/parent-choice.component';
import { StoreDrivenCounterComponent } from './store-driven-counter/store-driven-counter.component';
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "./store-driven-counter/counter.reducer";
import { SimpleFormComponent } from './simple-form/simple-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MytextfieldComponent,
    MakechoiceComponent,
    MakegreenDirective,
    ShowUsersComponent,
    CountToTenComponent,
    ParentChoiceComponent,
    StoreDrivenCounterComponent,
    SimpleFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterOutlet,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({count: counterReducer}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
