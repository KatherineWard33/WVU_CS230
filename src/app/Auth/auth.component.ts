import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
    selector: "app-auth",
    templateUrl: "auth.component.html"
})
export class AuthComponent {
    public buttonClicked: string = "";
    public constructor(private service: AuthService) {

    }
    public onSubmit(authForm: NgForm) {
        console.log(authForm.value)
        if (this.buttonClicked == 'Signup') {
            this.service.signUp(authForm.value.username, authForm.value.password).subscribe(
                data => {
                    console.log(data);
                }
            )
        } else {
            this.service.logIn(authForm.value.username, authForm.value.password).subscribe(
                data => {
                    console.log(data);
                }
            )
        }

    }


}