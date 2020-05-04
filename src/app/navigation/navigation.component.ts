import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  menuConfig: [] = [];

  constructor(private resumeService: ResumeService) { 
    this.resumeService.fetchMenuConfig().subscribe((data) => {
      this.menuConfig = data;
    })
  }

  ngOnInit(): void {}

}
