import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-general-list',
  templateUrl: './general-list.component.html',
  styleUrls: ['./general-list.component.scss']
})
export class GeneralListComponent implements OnInit {

  @Input() list;

  constructor() { }

  ngOnInit(): void {
  }

}
