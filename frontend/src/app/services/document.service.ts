import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DocumentModel } from './DocumentModel';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private _jsonURL = 'assets/documents.json';
  documentUrl: string = environment.apiUrl + '/' + 'document';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any[]>(this.documentUrl);
  }

  getByDocId(docId: string) {
    return this.http.get<any>(this.documentUrl + '/' + docId);
  }

  // getAll() {
  //   return this.http.get(this._jsonURL);
  // }

  // getByDocId(docId: string): Observable<DocumentModel | null> {
  //   return this.getAll().pipe(
  //     map((documents: DocumentModel[]) => {
  //       const foundDocument = documents.find((document) => document.docId === docId);
  //       return foundDocument || null;
  //     })
  //   );
  // }

  deleteByDocId(docId: string) {
    return this.http.delete<boolean>(this.documentUrl + '/' + docId);
  }

  deleteAll() {
    return this.http.delete<boolean>(this.documentUrl);
  }

  save(docId: string, documentName: string, content: string) {
    let req = {
      "docId": docId,
      "content": content,
      "documentName": documentName
    }
    return this.http.post<boolean>(this.documentUrl, req);
  }

  saveName(docId: string, documentName: string) {
    let req = {
      "docId": docId,
      "documentName": documentName
    }
    return this.http.put<boolean>(this.documentUrl, req);
  }
}
