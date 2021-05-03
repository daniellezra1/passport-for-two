import { Component } from '@angular/core';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  faEnvelope = faEnvelope;
  faInstagramSquare = faInstagramSquare;

  open(url) {
    window.open(url);
  }  
}
