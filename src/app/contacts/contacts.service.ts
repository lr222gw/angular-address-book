import { Injectable } from '@angular/core';
import { CONTACTS } from '../data/contacts';
import { Contact } from '../models/contact';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public contacts: Contact[] = CONTACTS;

  public AddConact(contact:Contact){
    contact.id = Math.max(...this.contacts.map(x => x.id)) +1;
    this.contacts.push(contact);
  }
  public EditConact(id:number, contact:Contact){
    let og:Contact|undefined = this.contacts.find(x => x.id === id);
    var index = this.contacts.findIndex(x => x.id == id)
    this.contacts[index] = { // Don't allow to set empty strings
      id : og?.id!,
      firstName : contact.firstName.trim().length != 0 ? contact.firstName : og?.firstName!,
      lastName  : contact.lastName.trim().length != 0  ? contact.lastName  : og?.lastName!,
      city      : contact.city.trim().length != 0      ? contact.city      : og?.city!,
      street    : contact.street.trim().length != 0    ? contact.street    : og?.street!,
    }
    
  }
  public GetContactById(id:number): Observable<Contact|undefined>
  {
    return of(this.contacts.find(x => x.id == id));
  }
}
