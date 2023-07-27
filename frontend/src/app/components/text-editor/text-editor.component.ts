import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QuillConfiguration } from './quill-configuration';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {

  @Input() quillConfiguration = QuillConfiguration;
  @Input() control: FormControl;
  constructor() {}

  ngOnInit() {
    this.control = this.control ?? new FormControl();
  }

}
