import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FavstarComponent } from './favstar/favstar.component';
import { TitleCasePipe } from './titlecase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FavstarComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
