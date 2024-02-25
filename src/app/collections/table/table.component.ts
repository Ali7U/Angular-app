import { Component, Input, OnInit } from '@angular/core';

interface IData {
  name: string;
  age: number;
  job: string;
}
interface IHeaders {
  key: string;
  label: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {
  @Input('class') classNames: string = '';

  @Input() data: IData[] | any = [];
  @Input() headers: IHeaders[] = [];

  constructor() {}
  ngOnInit(): void {}
}
