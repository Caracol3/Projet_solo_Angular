import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Child, ChildCreated } from 'src/app/models/children.model';
import { Family } from 'src/app/models/family.model';

@Injectable({
  providedIn: 'root'
})
export class FamiliesService {

  private APIurl = 'http://localhost:8080';

  family: Family[] = [];
  child: Child[] = [];

  constructor(private httpClient: HttpClient) { }

getFamilyById(familyId: number): Observable<Family> {
  return this.httpClient.get<Family>(this.APIurl + '/family/' + familyId);
}

// createChildren(familyId: number, child: any): Observable<any> {
//   return this.httpClient.post<any>(this.APIurl + '/family/' + familyId + '/child', child);
// }

createChildren(familyId: number, child: ChildCreated): Observable<Child> {
  return this.httpClient.post<Child>(`${this.APIurl}/children/create/${familyId}`, child);
}
}
