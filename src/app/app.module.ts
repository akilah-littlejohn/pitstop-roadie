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
import { ReviewComponent } from './review/review.component';
import { PostComponent } from './component/post/post.component';

@NgModule({
  declarations: [AppComponent, routingComponents, ReviewComponent, PostComponent],
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
