import { Component, OnInit, Input } from '@angular/core';
import { ResumeData } from '../resume-data';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  resumeData: ResumeData;

  constructor(private resumeService: ResumeService) {
    this.resumeService.fetchResumeData().subscribe((data) => {
      this.resumeData = data;
    })
  }

  ngOnInit(): void {}

}
