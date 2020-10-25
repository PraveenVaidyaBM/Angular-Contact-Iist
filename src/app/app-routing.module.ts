import { AboutComponent } from './component/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ViewContactsComponent } from './component/view-contacts/view-contacts.component';
import { AddContactComponent } from './component/add-contact/add-contact.component';
import {UpdateContactComponent} from './component/update-contact/update-contact.component'

const routes: Routes = [
{path: '', component: ViewContactsComponent},
{path: 'about',component:AboutComponent},
{path:'contact/add',component:AddContactComponent},
{path:'contact/edit:id',component:UpdateContactComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
