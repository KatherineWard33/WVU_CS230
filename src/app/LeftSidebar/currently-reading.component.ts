import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currently-reading-card',
  templateUrl: './currently-reading.component.html',
  styleUrls: ['./currently-reading.component.css']
})
export class CurrentlyReadingComponent {
  @Input()
  title!: string;
  @Input()
  author!: string;
}
