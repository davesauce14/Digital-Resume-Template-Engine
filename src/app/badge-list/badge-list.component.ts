import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-badge-list',
  templateUrl: './badge-list.component.html',
  styleUrls: ['./badge-list.component.scss']
})
export class BadgeListComponent implements OnInit {

  @Input() list;

  constructor() { }

  ngOnInit(): void {
  }

}
