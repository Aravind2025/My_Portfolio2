import {Component} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }

  openResume() {
    window.open("./assets/Aravind_Resume_FS.pdf");
  }

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/aravind-ar-1547371a0/', '_blank');
  }

  goToGithub() {
    window.open('https://github.com/Aravind2025', '_blank');
  }
}
