import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  contactForm: FormGroup;
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly contactsService: ContactsService,
    private readonly router: Router
  ){
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
    });
  }

  submitContact():void {
    const newContact: Contact = {
      id: 0,
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      city: this.contactForm.value.city,
      street: this.contactForm.value.Street,
    };
    this.contactsService.AddConact(newContact);
    this.contactForm.reset();
    this.router.navigate(['/contacts']);
  }
}
