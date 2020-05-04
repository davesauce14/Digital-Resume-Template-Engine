import { Component, OnInit, Input } from '@angular/core';
import { ResumeData, ContactInformation } from '../resume-data';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

  resumeData: ResumeData;

  contactInfo: ContactInformation[];

  constructor(private resumeService: ResumeService) {
    this.resumeService.fetchResumeData().subscribe((data) => {
      this.resumeData = data;
      this.contactInfo = this.resumeData.personalInfo.contactInformation;
    })
  }

  ngOnInit(): void {}

}
