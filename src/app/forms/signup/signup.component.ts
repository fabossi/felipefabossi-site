import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isLoading = false;
  subscription: Subscription;
  regexLetters = '^[ a-zA-Z]+$';
  onlyLettersMessage = 'Insert at least 3 characters without numbers.';
  validEmailMessage = 'Please, insert a valid email.';
  threeLettersMessage = 'Insert at least 3 characters.';
  diferentPasswordMessage = 'the passwords are not equal!';
  opacity = false;
  signupForm: FormGroup;
  stausRequest = 'wait';
  mxlengthTA = 355;
  mxlengthN = 25;
  mxlengthLN = 45;
  initAnimation = false;
  see_password = false;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.onRequestComplete().subscribe(status => {
      if (status === 'ready') {
        this.stausRequest = status;
      } else if (status === 'waiting') {
        this.stausRequest = status;
      } else if (status === 'error') {
        this.stausRequest = status;
      }
    });
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'nameTextInput': new FormControl('', [Validators.required, Validators.minLength(3),
      Validators.maxLength(this.mxlengthN), Validators.pattern(this.regexLetters)]),
      'lastNameTextInput': new FormControl('', [Validators.required, Validators.minLength(3),
      Validators.maxLength(this.mxlengthLN), Validators.pattern(this.regexLetters)]),
      'emailTextInput': new FormControl('', [Validators.required, Validators.email]),
      'passwordTextInput': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'passwordConfirmTextInput': new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
    this.initAnimation = true;
  }

  cleanFields() {
    this.signupForm.reset();
  }

  onSignUp() {
    if (this.signupForm.invalid) {
      return;
    }
    this.authService.signup(this.signupForm.get('nameTextInput').value, this.signupForm.get('lastNameTextInput').value,
      this.signupForm.get('emailTextInput').value, this.signupForm.get('passwordTextInput').value)
      .then()
      .catch((error) => {
        console.error(error);
      });
  }

  seePassword() {
    this.see_password = !this.see_password;
  }

  openLogin() {
    this.authService.type.next('login');
  }
}
