import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
//import { ConfiramtionComponent } from 'src/app/shared/components/confiramtion/confiramtion.component';
// import { ToasterService } from 'src/app/shared/services/toaster.service';
import { DocumentService } from '../../services/document.service';
import { v4 as uuidV4 } from "uuid";
import { ToasterService } from 'src/app/services/toaster.service';
import { ConfiramtionComponent } from '../confiramtion/confiramtion.component';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {
  documents = [];

  constructor(
    public toasterService: ToasterService,
    public dialog: MatDialog,
    public documentService: DocumentService) {
  }

  ngOnInit(): void {
    this.getAllDocuments();
  }

  public getAllDocuments() {
    this.documentService.getAll().subscribe((res: any[]) => {
      if (res != null) {
        this.documents = res;
      }
    });
  }

  delete(id: string) {
    const dialogRef = this.dialog.open(ConfiramtionComponent, {
      width: '400px',
      data: { id: id },
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.documentService.deleteByDocId(id).subscribe(data => {
          this.toasterService.openSnackBar('Deleted Succesfully!', 'Ok');
          this.getAllDocuments();
        });
      }
    });

  }
}
