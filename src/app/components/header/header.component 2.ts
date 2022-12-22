import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string | undefined = 'Reading List';

  constructor() {}

  ngOnInit(): void {}

  toggleAddBook() {
    console.log('toggle');
  }
}
