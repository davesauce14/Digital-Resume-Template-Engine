import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';
import { ResumeData, GeneralItem, Pets } from '../resume-data';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  resumeData: ResumeData;
  hobbies: GeneralItem[];
  pets: Pets;

  constructor(private resumeService: ResumeService) {
    this.resumeService.fetchResumeData().subscribe((data) => {
      this.resumeData = data;
      this.hobbies = this.resumeData.personalInfo.hobbies;
      this.pets = this.resumeData.personalInfo.pets;
    })
  }

  ngOnInit(): void {}

}
