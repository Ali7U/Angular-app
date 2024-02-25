import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css',
})
export class ModsHomeComponent implements OnInit {
  modalOpen: boolean = false;

  items = [
    {
      title: 'Capital of France',
      content: 'Paris is the capital of France.',
    },
    {
      title: "Author of 'Romeo and Juliet'",
      content: "William Shakespeare wrote 'Romeo and Juliet.'",
    },
    {
      title: 'Largest Planet in Our Solar System',
      content: 'Jupiter is the largest planet in our solar system.',
    },
    {
      title: 'Year World War II Ended',
      content: 'World War II ended in the year 1945.',
    },
    {
      title: 'Painter of the Mona Lisa',
      content: 'The Mona Lisa was painted by Leonardo da Vinci.',
    },
  ];

  constructor() {}
  ngOnInit() {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
