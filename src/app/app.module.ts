import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { FormsModule } from '@angular/forms';
import { MarkPipe } from './basic/mark.pipe';
import { TypeaheadComponent } from './typeahead/typeahead.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    MarkPipe,
    TypeaheadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
