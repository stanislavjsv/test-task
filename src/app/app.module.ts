import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPageComponent } from './list-page/list-page.component';
import { CardsPageComponent } from './cards-page/cards-page.component';
import { TableComponent } from './list-page/table/table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppService } from './services/app-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    CardsPageComponent,
    TableComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
