import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './feature/components/header/header.component';
import { LoginComponent } from './feature/components/header/login/login.component';
import { SearchComponent } from './feature/components/search/search.component';
import { SearchResultListComponent } from './feature/components/search-result-list/search-result-list.component';
import { ClipCardComponent } from './feature/components/search-result-list/clip-card/clip-card.component';
import { LikePanelComponent } from './feature/components/search-result-list/like-panel/like-panel.component';
import { ActionButtonComponent } from './feature/components/search-result-list/action-button/action-button.component';
import { FilterComponent } from "./feature/components/header/filter/filter.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FilterComponent,
        LoginComponent,
        SearchComponent,
        SearchResultListComponent,
        ClipCardComponent,
        LikePanelComponent,
        ActionButtonComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
