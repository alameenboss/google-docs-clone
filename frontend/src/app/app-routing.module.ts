import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DocEditorComponent } from './components/doc-editor/doc-editor.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { v4 as uuidV4 } from "uuid";

const routes: Routes = [
  { path: '', component: DocumentListComponent },
  {
    path: 'new', redirectTo: `edit/${uuidV4()}`, pathMatch: 'full',
  },
  {
    path: 'list', component: DocumentListComponent,
  },
  {
    path: 'edit/:id', component: DocEditorComponent,
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

