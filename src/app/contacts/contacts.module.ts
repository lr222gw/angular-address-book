import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AddComponent, 
    ListComponent,
    ViewComponent,
    EditComponent,
  ],
  imports: [
    CommonModule, ReactiveFormsModule,
    RouterModule
  ],
   // Export this Modules Components 
  exports: [
    AddComponent,
    ListComponent,
    ViewComponent,
    EditComponent,
  ]
})
export class ContactsModule { }
