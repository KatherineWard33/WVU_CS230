import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-update-card',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  @Input()
  user!: string;
  @Input()
  title!: string;
  @Input()
  author!: string;
  @Input()
  image!: string;
  @Input()
  description!:string;
}
