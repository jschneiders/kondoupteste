import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { UserForm } from './user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserForm
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent,UserForm]
})
export class AppModule { }
