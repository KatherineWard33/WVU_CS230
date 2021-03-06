import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './Auth/auth.component';
import { AddUpdateComponent } from './Body/add-update.component';
import { ChoiceAwardsComponent } from './Body/choice-awards.component';
import { ExploreComponent } from './Body/explore.component';
import { ListsComponent } from './Body/lists.component';
import { MyBooksComponent } from './Body/my-books.component';
import { RecommendationsComponent } from './Body/recommendations.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  { path: 'home', component: LayoutComponent },
  { path: 'my-books', component: MyBooksComponent },
  { path: 'recommendations', component: RecommendationsComponent },
  { path: 'choice-awards', component: ChoiceAwardsComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'lists', component: ListsComponent },
  { path: '',redirectTo: '/home',pathMatch:'full'},
  { path: 'add-update', component: AddUpdateComponent},
  { path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
