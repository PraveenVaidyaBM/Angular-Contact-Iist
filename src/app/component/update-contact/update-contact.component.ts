import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../../services/contacts.service';
import { Contacts } from './../../models/contacts/Contact.model';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
name: string;
email: string;
phone: number;
contact: Contacts;

  constructor(
    private ContactsServiceHandle: ContactsService

  ) { }

  ngOnInit(): void {
  }
  editContact(){
    const contact = {
      name: this.name,
      email: this.email,
      phone: this.phone
    }
    this.ContactsServiceHandle.updateContact
  }
}
