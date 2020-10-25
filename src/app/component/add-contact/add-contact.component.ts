import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../../services/contacts.service';
import { Contacts } from './../../models/contacts/Contact.model';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
name: string;
email: string;
phone: number;
contact: Contacts

  constructor(
    private ContactsServiceHandle: ContactsService
  ) { }

  ngOnInit(): void {
  }

  AddContact(contact: Contacts) {
    this.ContactsServiceHandle.addContact(contact)
  }
}
