import { Component, Input } from '@angular/core';

interface IStats {
  value: number;
  label: string;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css',
})
export class StatisticsComponent {
  @Input() data: IStats[] = [];
}
