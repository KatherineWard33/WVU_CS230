import { Component } from '@angular/core';

@Component({
  selector: 'app-update-card',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  title:string = "So Long, See You Tomorrow";
  author:string = "William Maxwell";
  description:string = `On an Illinois farm in the 1920s, a man is murdered, and in the same moment the 
  tenuous friendship between two lonely boys comes to an end. In telling their interconnected stories,
  American Book Award winner William Maxwell delivers a masterfully restrained and magically evocative
  meditation on the past.`
}
