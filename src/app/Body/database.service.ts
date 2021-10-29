import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from "rxjs";
import { Update } from "./update.model";
@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    items: Observable<Update[]>;
    constructor(private db: AngularFireDatabase) {
        console.log("establishing database connection");
        this.items = this.db.list<Update>('Updates').valueChanges();
    }
    public showData(){
        this.items.subscribe((data:Update[])=>{
            console.log("data recieved");
            for(let item of data){
                console.log(item);
            }
        })
    }
}