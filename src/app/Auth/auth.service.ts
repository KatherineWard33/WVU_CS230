import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private baseURL: string = "https://identitytoolkit.googleapis.com/v1/accounts";
    private signUpEndpoint: string = "signUp";
    private loginEndpoint: string ="signInWithPassword";

    constructor(private http: HttpClient) {

    }
    public signUp(email: string, password: string) {
        const payLoad = {
            "email": email,
            "password": password,
            "returnSecureToken": true
        }
        
        var url: string = this.baseURL + ':' + this.signUpEndpoint + '?' + 'key=' + environment.firebase.apiKey;
        console.log(url);
        return this.http.post(url, payLoad);
    }
    public logIn(email:string, password:string){
        const payLoad = {
            "email": email,
            "password": password,
            "returnSecureToken": true
        }
        var url: string = this.baseURL + ':' + this.loginEndpoint + '?' + 'key=' + environment.firebase.apiKey;
        console.log(url);
        return this.http.post(url, payLoad);
    }
}