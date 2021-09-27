import { Component } from '@angular/core';
import { mockUpdates } from './mock-updates';
import { Update } from './update.model';

@Component({
  selector: 'app-update-feed',
  templateUrl: './update-feed.component.html'
})
export class UpdateFeedComponent {
  updates:Update[] = [];

  constructor(){
    for(var update of mockUpdates){
        this.updates.push(new Update(update));
    }
  }

}

