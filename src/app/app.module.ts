import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EventslistComponent } from './pages/eventslist/eventslist.component';
import { MaterialModule } from '@angular/material';
import { RequestComponent } from './pages/request/request.component';
import { TestFireBaseComponent } from './pages/test-fire-base/test-fire-base.component';
import { AngularFireModule } from 'angularfire2';
import { ReactiveformstestComponent } from './pages/reactiveformstest/reactiveformstest.component';
import { environment } from './../environments/environment';
import { TemplatedrivenformsComponent } from './pages/templatedrivenforms/templatedrivenforms.component';
import { AuthguardtestComponent } from './pages/authguardtest/authguardtest.component';
import { AppRoutingModule } from './routes/app.routing';
import { RouterModule } from '@angular/router';
import { RestrictedaccessComponent } from './pages/restrictedaccess/restrictedaccess.component';

// services
import { AuthGuard } from './services/auth-guard-service';
import { AuthService } from './services/auth-service';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    EventslistComponent,
    RequestComponent,
    TestFireBaseComponent,
    ReactiveformstestComponent,
    TemplatedrivenformsComponent,
    AuthguardtestComponent,
    RestrictedaccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [ AuthService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
