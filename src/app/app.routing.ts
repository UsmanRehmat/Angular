import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";
import {StudentComponent} from "./student/student.component";
import {ClassComponent} from "./class/class.component";
const APP_Routes : Routes =[
    {path:'', component : HomeComponent},
    {path:'signup', component:SignupComponent},
    {path:'signin', component: SigninComponent},
    {path: 'class', component: ClassComponent},
    {path : 'student' , component : StudentComponent }
];
export const routing= RouterModule.forRoot(APP_Routes);