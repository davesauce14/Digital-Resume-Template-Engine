import { Component, OnInit, Input } from '@angular/core';
import { ResumeData, WorkExperience } from '../resume-data';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  
  @Input() resumeData: ResumeData;

  workExperience: WorkExperience;
  relevancyToggle: boolean = false;

  constructor(private resumeService: ResumeService) {
    this.resumeService.fetchResumeData().subscribe((data) => {
      this.resumeData = data;
      this.workExperience = this.resumeData.workExperience;
    })
  }

  ngOnInit(): void {}
  toggleRelevancy() {
    this.relevancyToggle = !this.relevancyToggle;
  }
}
