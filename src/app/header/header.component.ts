import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { Header, ResumeData } from '../resume-data';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  resumeData: ResumeData;
  header: Header;

  greetingIndex: number;
  shouldDisplayGreeting: boolean = false;

  constructor(private resumeService: ResumeService, private renderer: Renderer2) {
    this.resumeService.fetchResumeData().subscribe((data) => {
      this.resumeData = data;
      this.header = this.resumeData.header;
      if (this.header.greetings && this.header.greetings.length > 0) {
        this.greetingIndex = 0;
      }
    })
  }

  ngOnInit(): void {}

  displayGreeting() {
    if (this.greetingIndex !== undefined) {
      this.shouldDisplayGreeting = true;
      setTimeout(() => {
        if (this.greetingIndex < this.header.greetings.length -1) {
          this.greetingIndex ++;
        } else {
          this.greetingIndex = 0;
        }
        this.shouldDisplayGreeting = false;
      }, 2000)
    }
  }

}
