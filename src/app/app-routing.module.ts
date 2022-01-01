import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardsPageComponent } from './cards-page/cards-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TableComponent } from './list-page/table/table.component';

const routes: Routes = [
  { path: '', component:CardsPageComponent},
  {
    path: 'navigator',
    component: ListPageComponent,
    children: [
      {
        path: '',
        component: TableComponent,
        pathMatch: 'full',
      },
    ],
  },
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
