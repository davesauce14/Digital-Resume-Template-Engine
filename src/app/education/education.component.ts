import { Component, OnInit, Input } from '@angular/core';
import { AcedemicBackground, OnlineLearning, Badge, ResumeData } from '../resume-data';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  resumeData: ResumeData;

  acedemicBackground: AcedemicBackground[];
  onlineLearning: OnlineLearning[];
  skillSet: Badge[];

  constructor(private resumeService: ResumeService) {
    this.resumeService.fetchResumeData().subscribe((data) => {
      this.resumeData = data;
      this.acedemicBackground = this.resumeData.educationBackground.acedemicBackground;
      this.onlineLearning = this.resumeData.educationBackground.onlineLearning;
      this.skillSet = this.resumeData.educationBackground.skillSet;
    })
  }

  ngOnInit(): void {}

}
