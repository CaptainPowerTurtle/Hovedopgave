import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccountModule} from './account/account.module';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {HttpClientModule} from '@angular/common/http';
import {ConfigService} from './shared/config.service';
import {ShellModule} from './shell/shell.module';
import {HomeModule} from './home/home.module';
import {TopSecretModule} from './top-secret/top-secret.module';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import {FakeBackendProvider} from './shared/mocks/fake-backend-interceptor';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    AuthCallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    HomeModule,
    AccountModule,
    TopSecretModule,
    AppRoutingModule,
    ShellModule,
    SharedModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    ConfigService,
    FakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
