import { Component, OnInit } from '@angular/core';
import { Contacts } from 'src/app/models/contacts/Contact.model';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.css']
})
export class ViewContactsComponent implements OnInit {
  userContacts:Contacts[]

  constructor(
    private ContactsServiceHandle: ContactsService
  ) { }

  ngOnInit(): void {
    this.ContactsServiceHandle.getContacts().subscribe(contacts =>{
      this.userContacts= contacts
    });
  }

}
