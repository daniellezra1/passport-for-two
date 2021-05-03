import { Component } from '@angular/core';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  faEnvelope = faEnvelope;
  faInstagramSquare = faInstagramSquare;

  open(url) {
    window.open(url);
  }  
}

