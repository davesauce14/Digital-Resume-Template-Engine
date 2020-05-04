import { Component } from '@angular/core';
import { ResumeService } from './resume.service';
import { ResumeData } from './resume-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'digital-resume-template-engine';
  resumeData: ResumeData;

  constructor(private resumeService: ResumeService) {
    resumeService.fetchResumeData().subscribe((data) => {
      this.resumeData = data;
    })
  }
}
