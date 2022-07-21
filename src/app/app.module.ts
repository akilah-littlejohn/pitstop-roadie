import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRpoutingModule, routingComponents } from './app-routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
//third party modules
import { MaterialModule } from './material/material.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserManagementService } from './user-management.service';

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRpoutingModule,
    MaterialModule,
    AuthenticationModule,
    FormsModule
  ],
  providers: [UserManagementService],
  bootstrap: [AppComponent],
})
export class AppModule {

}
