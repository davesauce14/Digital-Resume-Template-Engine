import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResumeData } from './resume-data';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  resumeData: ResumeData;

  constructor(private http: HttpClient) {}

  fetchResumeData(): Observable<ResumeData> {
    if (this.resumeData) {
      return of(this.resumeData);
    } else {
      return this.http.get('./assets/resume.json')
      .pipe(
        map((x: ResumeData) => {
          this.resumeData = x;
          return x;
        })
      );
    }
  }

  fetchMenuConfig(): Observable<[]> {
    return this.http.get('./assets/menu.json')
      .pipe(
        map((x: []) => {
          return x;
        })
      );
  }
}
