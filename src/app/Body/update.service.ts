import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Update } from "./update.model";

@Injectable({
    providedIn:'root'
})
export class UpdateService{
private baseURL: string = "https://goodreads-3d57f-default-rtdb.firebaseio.com/";
private endpoint : string = "Updates.json";
constructor(private http: HttpClient){

}
public getUpdates(){
    return this.http.get<Update []>(this.baseURL+this.endpoint);
}
}