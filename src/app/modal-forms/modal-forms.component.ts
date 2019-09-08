import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PreviousRouteService } from '../services/previous-route.service';

@Component({
  selector: 'app-modal-forms',
  templateUrl: './modal-forms.component.html',
  styleUrls: ['./modal-forms.component.scss']
})
export class ModalFormsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  active: boolean;
  type: string;

  constructor(private authService: AuthService, private router: Router) {
    this.subscription = this.authService.showModal.subscribe((isActivated) => {
      if (isActivated) {
        this.active = isActivated;
      }
    });
    this.subscription = this.authService.showModal.subscribe((signUpActive) => {
      if (signUpActive) {
        this.active = signUpActive;
      }
    });
    this.subscription = this.authService.type.subscribe((type) => {
      if (type === 'email') {
        this.type = type;
      }
      if (type === 'signup') {
        this.type = type;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

  closeModal() {
    this.active = !this.active;
    this.authService.showModal.next(this.active);
    this.router.navigate(['/']);
  }
}
