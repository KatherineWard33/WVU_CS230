import { Component } from "@angular/core";
import { DatabaseService } from "./database.service";
import { Update } from "./update.model";
import { UpdateService } from "./update.service";

@Component({
    selector: 'app-add-update',
    templateUrl: 'add-update.component.html'
})
export class AddUpdateComponent {
    constructor(private updateService: UpdateService, private db: DatabaseService) {
        this.db.showData();
    }
    public onAddUpdate(data: Update) {
        console.log("you press the button")
        console.log(data)
        this.updateService.pushUpdates(data).subscribe(data => {
            console.log("The update has been added to the database.")
        });
    }
}