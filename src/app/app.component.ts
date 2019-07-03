import { Component } from '@angular/core';
import { Beauty } from './models/beauty.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  title = "Home";

  constructor(private router: Router) {}
}
