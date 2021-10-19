import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CurrentlyReading } from "./currently-reading.model";

@Injectable({
    providedIn:'root'
})
export class CurrentlyReadingService{
private baseURL: string = "https://goodreads-3d57f-default-rtdb.firebaseio.com/";
private endpoint : string = "CurrentlyReading.json";
constructor(private http: HttpClient){

}
public getCurrentlyReading(){
    return this.http.get<CurrentlyReading []>(this.baseURL+this.endpoint);
}
}