import { Component } from '@angular/core';
import { Update } from './update.model';
import { UpdateService } from './update.service';

@Component({
  selector: 'app-update-feed',
  templateUrl: './update-feed.component.html'
})
export class UpdateFeedComponent {
  updates:Update[] = [];

  constructor(private updateService:UpdateService){
    this.fetchUpdates();
  }
private fetchUpdates(){
  this.updateService.getUpdates().subscribe((data:Update[])=>{
    
    for (let item in data){
      this.updates.push(data[item]);
    }
  })
}
}

