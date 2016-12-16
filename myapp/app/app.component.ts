import {Component} from "@angular/core";

@Component({
  selector: "first-app",
//   template: `
//   <StackLayout>
//   <Image src="~/app/App_Resources/logo_login.png"></Image>
//   <Image src="res://logo_login" stretch="none" horizontalAlignment="center"></Image>
//     <TextField hint="Email Address" keyboardType="email"
//       autocorrect="false" autocapitalizationType="none"></TextField>
//     <TextField hint="Password" secure="true"></TextField>

//     <Button text="Sign in" class="submit-button"></Button>
//     <Button text="Register" class="submit-button"></Button>
//     </StackLayout>
//   `,
  templateUrl : 'app.component.html',
   styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class AppComponent {    
    email = "munish.satia@gmail.com";
    submit(){
       alert("Welcome " + this.email);
    }
}
