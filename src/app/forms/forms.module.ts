import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsRoutingComponent } from './forms.routing';
import { ModalFormsComponent } from '../modal-forms/modal-forms.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ModalMessageSubmitComponent } from '../modal-message-submit/modal-message-submit.component';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


library.add(faEye, faEyeSlash);
dom.watch();

@NgModule({
  declarations: [LoginComponent, SignupComponent, ModalFormsComponent, ContactFormComponent, ModalMessageSubmitComponent],
  imports: [FormsRoutingComponent, CommonModule, ReactiveFormsModule, FontAwesomeModule]
})

export class FormsModuleComponent { }
