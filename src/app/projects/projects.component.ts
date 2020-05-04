import { Component, OnInit, Input } from '@angular/core';
import { ResumeData, GeneralItem, Badge } from '../resume-data';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @Input() resumeData: ResumeData;

  professionalProjects: GeneralItem[];
  personalProjects: GeneralItem[];
  professionalAwards: GeneralItem[];
  publicSpeaking: GeneralItem[];
  implementations: Badge[];

  constructor(private resumeService: ResumeService) {
    this.resumeService.fetchResumeData().subscribe((data) => {
      this.resumeData = data;
      this.professionalProjects = this.resumeData.notableAchievements.professionalProjects;
      this.personalProjects = this.resumeData.notableAchievements.personalProjects;
      this.professionalAwards = this.resumeData.notableAchievements.professionalAwards;
      this.implementations = this.resumeData.notableAchievements.implementations;
      this.publicSpeaking = this.resumeData.notableAchievements.publicSpeaking;
    })
  }

  ngOnInit(): void {}
}
