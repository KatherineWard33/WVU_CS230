import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UpdateComponent } from './Body/update.component';
import { FooterComponent } from './Footer/footer.component';
import { TopbarComponent } from './Header/topbar.component';
import { LayoutComponent } from './layout/layout.component';
import { CurrentlyReadingComponent } from './LeftSidebar/currently-reading.component';
import { MyBooksComponent } from './Body/my-books.component';
import { RecommendationsComponent } from './Body/recommendations.component';
import { ChoiceAwardsComponent } from './Body/choice-awards.component';
import { ListsComponent } from './Body/lists.component';
import { ExploreComponent } from './Body/explore.component';
import { AppRoutingModule } from './app-routing.module';
import { UpdateFeedComponent } from './Body/update-feed.component';
import { HttpClientModule} from '@angular/common/http'
import { UserInfoComponent } from './Header/user-info.component';
import { CurrentlyReadingListComponent } from './LeftSidebar/currently-reading-list.component';
import { AddUpdateComponent } from './Body/add-update.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FooterComponent,
    UpdateComponent,
    CurrentlyReadingComponent,
    LayoutComponent,
    MyBooksComponent,
    RecommendationsComponent,
    ChoiceAwardsComponent,
    ListsComponent,
    ExploreComponent,
    UpdateFeedComponent,
    UserInfoComponent,
    CurrentlyReadingListComponent,
    AddUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
