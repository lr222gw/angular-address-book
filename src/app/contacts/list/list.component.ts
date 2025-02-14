import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public contacts : Contact[] = [];
  constructor(private readonly contactService:ContactsService)
  {
    this.contacts = contactService.contacts;
  }
}
