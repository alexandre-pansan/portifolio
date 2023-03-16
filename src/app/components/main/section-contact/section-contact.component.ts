import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss']
})
export class SectionContactComponent {

  constructor(private router: Router) {

  }
  redirectTo(url: string) {
    window.open(url, "_blank")
  }

}
