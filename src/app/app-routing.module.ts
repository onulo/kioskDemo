import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {LetakyComponent} from './letaky/letaky.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'newsletter/:id', component: LetakyComponent},
  {path: 'newsletter', component: LetakyComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'oznamy', component: LetakyComponent},
  {path: '**', component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
