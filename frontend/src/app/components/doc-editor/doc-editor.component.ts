import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { QuillConfiguration } from '../../config/quill-configuration';
import { DocumentService } from '../../services/document.service';
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-doc-editor',
  templateUrl: './doc-editor.component.html',
  styleUrls: ['./doc-editor.component.scss']
})
export class DocEditorComponent implements OnInit {

  quillConfig = QuillConfiguration;
  docId: string;
  documentForm: FormGroup;
  documentName: string;
  public formValid: boolean = true;


  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private toasterService: ToasterService,
    private documentService: DocumentService) { }

  ngOnInit(): void {
    this.docId = this.route.snapshot.params['id'];

    this.documentForm = this.formBuilder.group({
      content: null
    });

    this.getById(this.docId);

    this.documentForm.valueChanges
      .pipe(
        debounceTime(1500),
        switchMap((value) => of(value))
      )
      .subscribe((value) => {
        this.saveDocument(value);
      });
  }

  get documentRawControl() {
    return this.documentForm.controls['content'] as FormControl;
  }

  getById(docId: string) {
    this.documentService.getByDocId(docId).subscribe(res => {
      if (res != null) {
        this.documentForm.patchValue({
          content: res.content
        });
        this.documentName = res.documentName
      }
    }, (e) => {
      this.toasterService.openSnackBar('Error Occured!', 'Ok');
    })

  }

  extractContent(html) {
    return new DOMParser()
      .parseFromString(html, "text/html")
      .documentElement.textContent;
  }

  savedocumentName() {
    this.getDocumentName();
    this.documentService.saveName(this.docId, this.documentName).subscribe(x=>{
      this.toasterService.openSnackBar('Saved document name', 'Ok');
    });
  }

  private getDocumentName() {
    debugger;
    if (this.documentName?.length <= 0 || this.documentName == null) {
      if(this.documentForm.controls['content'].value != null ){
        let extractedText = this.extractContent(this.documentForm.controls['content'].value).trim();
        if (extractedText?.length > 0) {
          if (extractedText?.length <= 20) {
            this.documentName = extractedText;
          } else {
            this.documentName = extractedText?.substring(0, 20);
          }
        }
      }
    }
  }

  saveDocument(value: any) {
    this.getDocumentName();
    this.documentService.save(this.docId,this.documentName, value.content).subscribe();
  }
}
