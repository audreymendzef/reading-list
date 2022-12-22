import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  CellClickedEvent,
  ColDef,
  GridReadyEvent,
  GridOptions,
} from 'ag-grid-community';
import { Book } from 'src/app/Book';
import { BOOKS } from 'src/app/mock-books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = BOOKS;

  constructor() {
    this.gridOptions = {
      columnDefs: this.columnDefs(),
      rowData: [],
    };
  }

  ngOnInit(): void {}

  public columnDefs(): ColDef[] {
    return [
      { headerName: 'Type', field: 'type', width: 70 },
      { headerName: 'Genre', field: 'genre', width: 100 },
      { headerName: 'Title', field: 'title', width: 150 },
      { headerName: 'Status', field: 'status', width: 85 },
      { headerName: 'Score', field: 'score', width: 50 },
      { headerName: 'Author', field: 'author', width: 80 },
    ];
  }
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  gridOptions: GridOptions;
  rowData: any;
}
