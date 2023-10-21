import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MytextfieldComponent} from './property-binding/mytextfield.component';
import {MakechoiceComponent} from './event-binding/makechoice.component';
import {MakegreenDirective} from './shared/makegreen.directive';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {ShowUsersComponent} from './service-call/show-users.component';
import {RouterOutlet} from "@angular/router";
import {CountToTenComponent} from './structural-directive/count-to-ten.component';
import {AppRoutingModule} from "./app-routing.module";
import { ParentChoiceComponent } from './parent-component/parent-choice.component';
import { StoreDrivenCounterComponent } from './ngrx-store/store-driven-counter.component';
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "./ngrx-store/counter.reducer";
import { TemplateFormComponent } from './template-form/template-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import {httpInterceptorProviders} from "./interceptors";
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';
import { NestedAdressFormComponent } from './nested-adress-form/nested-adress-form.component';
import { DoityourselfstylingComponent } from './doityourselfstyling/doityourselfstyling.component';
import { UsethirdpartylibforstylingComponent } from './usethirdpartylibforstyling/usethirdpartylibforstyling.component';

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
    TemplateFormComponent,
    ReactiveFormComponent,
    PageNotFoundComponent,
    NestedAdressFormComponent,
    DoityourselfstylingComponent,
    UsethirdpartylibforstylingComponent,
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
  providers: httpInterceptorProviders,
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
