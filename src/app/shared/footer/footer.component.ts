import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: false
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  
  constructor() { }

  ngOnInit(): void {
  }

}
