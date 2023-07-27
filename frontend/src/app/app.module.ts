import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { DocEditorComponent } from './components/doc-editor/doc-editor.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { ConfiramtionComponent } from './components/confiramtion/confiramtion.component';

@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    DocEditorComponent,
    DocumentListComponent,
    ConfiramtionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TextFieldModule,
    QuillModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
