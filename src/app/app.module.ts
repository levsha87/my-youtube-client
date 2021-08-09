import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SortingComponent } from './components/header/sorting/sorting.component';
import { LoginComponent } from './components/header/login/login.component';
import { SearchComponent } from './components/header/search/search.component';
import { ClipsCollectionComponent } from './components/clips-collection/clips-collection.component';
import { ClipCardComponent } from './components/clips-collection/clip-card/clip-card.component';
import { LikePanelComponent } from './components/clips-collection/like-panel/like-panel.component';
import { ActionButtonComponent } from './components/clips-collection/action-button/action-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SortingComponent,
    LoginComponent,
    SearchComponent,
    ClipsCollectionComponent,
    ClipCardComponent,
    LikePanelComponent,
    ActionButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
