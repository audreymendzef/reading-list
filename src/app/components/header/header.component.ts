import { Component, Input, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/Book';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() book!: Book;
  title: string | undefined = 'Reading List';
  showAddBook!: boolean;
  subscription!: Subscription;
  faTrashCan = faTrashCan;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddBook = value));
  }

  ngOnInit(): void {}

  toggleAddBook() {
    this.uiService.toggleAddBook();
  }

  onDelete() {
    console.log('hi');
  }
}
