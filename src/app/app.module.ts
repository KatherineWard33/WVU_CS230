import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UpdateComponent } from './Body/update.component';
import { FooterComponent } from './Footer/footer.component';
import { TopbarComponent } from './Header/topbar.component';
import { CurrentlyReadingComponent } from './LeftSidebar/currently-reading.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FooterComponent,
    UpdateComponent,
    CurrentlyReadingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
