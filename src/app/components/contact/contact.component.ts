import {Component} from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/aravind-ar-1547371a0/', '_blank');
  }

  get email(): string {
    return 'aravindalagarrengharajan@gmail.com';
  }
}
