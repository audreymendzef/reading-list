import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/Book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  @Output() onAddBook: EventEmitter<Book> = new EventEmitter();

  title!: string;
  author!: string;
  type!: string;
  genre!: string;
  status!: string;
  score!: string | number;

  constructor() {}
  ngOnInit(): void {}

  onSubmit() {
    if (!this.title) {
      alert('Please add title!');
      return;
    }

    const newBook = {
      title: this.title,
      author: this.author,
      type: this.type,
      genre: this.genre,
      status: this.status,
      score: this.score,
    };

    this.onAddBook.emit(newBook);

    this.title = '';
    this.author = '';
    this.type = '';
    this.genre = '';
    this.status = '';
    this.score = '';
  }
}
