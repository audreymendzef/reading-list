import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { AgGridAngular } from 'ag-grid-angular';
import {
  CellClickedEvent,
  ColDef,
  GridReadyEvent,
  GridOptions,
} from 'ag-grid-community';

import { Book } from 'src/app/Book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent implements OnInit {
  @Input() book!: Book;

  constructor(private bookService: BookService) {
    this.gridOptions = {
      columnDefs: this.columnDefs(),
      rowData: [],
    };
  }

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.bookService.getBooks();
  }

  ngOnInit(): void {}

  public rowData$!: Observable<any[]>;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  public columnDefs(): ColDef[] {
    return [
      { headerName: 'Type', field: 'type', width: 100 },
      { headerName: 'Genre', field: 'genre', width: 170 },
      { headerName: 'Title', field: 'title', width: 250 },
      { headerName: 'Status', field: 'status', width: 135 },
      { headerName: 'Score', field: 'score', width: 90 },
      { headerName: 'Author', field: 'author', width: 175 },
    ];
  }
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  gridOptions: GridOptions;
  rowData: any;
}
