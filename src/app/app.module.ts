import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserListComponent} from './user-list/user-list.component';
import {ErrorMetadataService} from './services/error-metadata.service';
import { ViewUserComponent } from './view-user/view-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ViewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: ErrorMetadataService}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
