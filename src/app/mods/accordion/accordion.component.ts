import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
})
export class AccordionComponent implements OnInit {
  @Input() items: any = [];
  openItemIndex: number = 0;
  constructor() {}

  ngOnInit(): void {}

  onClick(index: number) {
    if (this.openItemIndex === index) {
      this.openItemIndex = -1;
    } else {
      this.openItemIndex = index;
    }
  }
}
