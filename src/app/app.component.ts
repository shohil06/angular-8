import { Component } from '@angular/core';

@Component({
  // selector: 'app-root', // As an Element
  // selector: '[app-root]', // As an Attribute
  selector: '.app-root',

  templateUrl: './app.component.html',
  // template: `<!-- <input type="text" placeholder="Full Name" [(ngModel)]="name" /> -->
  // <!-- <p>{{ name }}</p> -->

  // <!-- ---------------------------------------------------------------------------------- -->

  // <h3>Hi this is my first component made by default</h3>
  // <app-server></app-server>
  // <app-foodie-comp></app-foodie-comp>
  // `,


  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // name = 'Shohil Sethia';
}
