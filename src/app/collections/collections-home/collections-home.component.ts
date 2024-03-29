import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.css',
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'James', age: 24, job: 'Designer', employed: true },
    { name: 'Ali', age: 23, job: 'Software Engineer', employed: true },
    { name: 'Jill', age: 26, job: 'Engineer', employed: false },
  ];

  headers = [
    { key: 'employed', label: 'has a job ?' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
