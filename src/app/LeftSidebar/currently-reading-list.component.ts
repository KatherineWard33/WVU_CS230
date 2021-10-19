import { Component } from "@angular/core";
import { CurrentlyReading } from "./currently-reading.model";
import { CurrentlyReadingService } from "./currently-reading.service";

@Component({
    selector: 'app-currently-reading-list',
    templateUrl: 'currently-reading-list.component.html',
})
export class CurrentlyReadingListComponent {
    public books: CurrentlyReading[] = [];
    constructor(private service: CurrentlyReadingService) {
        this.fetchBooks();
    }
    private fetchBooks() {
        return this.service.getCurrentlyReading().subscribe(data => {
            console.log(data);
            for (let item in data) {
                this.books.push(data[item]);
            }
        })
    }

}