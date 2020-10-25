import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Contacts } from '../models/contacts/Contact.model';

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  ContactsUrl:string='https://jsonplaceholder.typicode.com/users';
  ContactssLimit='?_limit=10';

  constructor(
    private http:HttpClient,
  ) { }

// to add the contact to the list
addContact(contact:Contacts):Observable<Contacts>{
    return this.http.post<Contacts>(this.ContactsUrl, contact, httpOptions);
  }

  // to get the list of contacts
getContacts(): Observable<Contacts[]>{
  return this.http.get<Contacts[]>(`${this.ContactsUrl}${this.ContactssLimit}`)
}
//to update the contacts
updateContact(contact:Contacts):Observable<void>{
  return this.http.put<void>(`${this.ContactsUrl}/${contact.id}`, httpOptions);
}
// to delete the contact from the list
deleteTodo(contact:Contacts):Observable<Contacts>{
  const url=`${this.ContactsUrl}/${contact.id}`;
  return this.http.delete<Contacts>(url, httpOptions)
}
}
