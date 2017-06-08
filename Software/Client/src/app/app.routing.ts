import { Routes, RouterModule} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import{ LoginComponent} from './login/login.component'
import{ RegisterComponent} from './register/register.component'
import{ PostticketComponent} from './postticket/postticket.component'
import{MoviedetailComponent}from './moviedetail/moviedetail.component'
import{BusdetailComponent}from './busdetail/busdetail.component'
const APP_ROUTES=[  
    {path:'', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},//furtherly add routes of homecomponent using children:
    {path:'login',component:LoginComponent},
    {path:'about',component:AboutComponent},
    {path:'register',component:RegisterComponent},
    {path:'postticket',component:PostticketComponent},
    {path:'home/:name',component: MoviedetailComponent},
    {path:'home/:from/:to',component:BusdetailComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);