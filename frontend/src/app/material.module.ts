import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';

const modules = [
  CommonModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  LayoutModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatTreeModule,
  DragDropModule,
  MatDialogModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatCheckboxModule,
  MatProgressBarModule,
  LayoutModule
]

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule { }
