import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-edit',
  standalone: false,
  // imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  contact:Contact|null = null; 
  contactId:number|null = null; 

  contactForm:FormGroup;
  constructor(
    private readonly contactFormBuilder :FormBuilder,
    private readonly contactsService : ContactsService,
    private readonly router :Router,
    private route: ActivatedRoute
  )
  {
    this.contactId = Number(this.route.snapshot.paramMap.get('id'));
    contactsService.GetContactById(this.contactId).subscribe((data) => {
      this.contact = data!;
    });
      
    this.contactForm = this.contactFormBuilder.group({
      firstName : [this.contact?.firstName ?? "" , ], //Validators.required 
      lastName :  [this.contact?.lastName ?? "" ,  ], //Validators.required 
      city :      [this.contact?.city ?? "" ,      ], //Validators.required 
      street :    [this.contact?.street ?? "" ,    ], //Validators.required 
    });
  }
  submitEditedContact(){
    const newContact: Contact = {
      id: this.contactId!,
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      city: this.contactForm.value.city,
      street: this.contactForm.value.street,
    };
    this.contactsService.EditConact(this.contactId!,newContact);
    this.contactForm.reset();
    this.router.navigate(['/contacts']);
  }
}
