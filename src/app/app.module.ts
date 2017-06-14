import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EventslistComponent } from './eventslist/eventslist.component';
import { MaterialModule } from '@angular/material';
import { RequestComponent } from './request/request.component';
import { TestFireBaseComponent } from './test-fire-base/test-fire-base.component';
import { AngularFireModule } from 'angularfire2';
import { ReactiveformstestComponent } from './reactiveformstest/reactiveformstest.component';
import { environment } from './../environments/environment';
import { TemplatedrivenformsComponent } from './templatedrivenforms/templatedrivenforms.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    EventslistComponent,
    RequestComponent,
    TestFireBaseComponent,
    ReactiveformstestComponent,
    TemplatedrivenformsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
