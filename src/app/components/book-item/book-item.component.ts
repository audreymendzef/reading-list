import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent, GridOptions } from 'ag-grid-community';
import { Book } from 'src/app/Book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
})
export class BookItemComponent implements OnInit {
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

  public rowData$!: Observable<Book[]>;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  public columnDefs(): ColDef[] {
    return [
      {
        headerName: 'Type',
        field: 'type',
        editable: true,
        cellEditor: 'agSelectCellEditor',
        width: 125,
        cellEditorParams: {
          values: ['Fiction', 'Non-Fiction'],
        },
      },
      {
        headerName: 'Genre',
        field: 'genre',
        editable: true,
        width: 170,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: [
            'Romance',
            'Fantasy',
            'Sci-Fi',
            'War Drama',
            'Dystopian',
            'Dark Romance',
            'Historical Fiction',
            'Drama Romance',
            'Sad Romance',
            'Greek Myth Drama',
            'Smut',
            'Coming of Age Romance',
            'Coming of Age',
            'LGBT Romance',
            'Rom-Com',
            'Mystery',
            'Drama Mystery',
            'Action/Adventure',
            'Thriller/Suspense',
            'Horror',
            'Young Adult',
            'AutoBiography',
            'Biography',
            'Self-Help',
            'History',
            'Travel',
            'True Crime',
            'Essays',
          ],
        },
      },
      { headerName: 'Title', field: 'title', editable: true, width: 250 },
      {
        headerName: 'Status',
        field: 'status',
        editable: true,
        cellEditor: 'agSelectCellEditor',
        width: 135,
        cellEditorParams: {
          values: ['Want to Read', 'Reading', 'Finished'],
        },
      },
      {
        headerName: 'Score',
        field: 'score',
        editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: ['1', '2', '3', '4', '5'],
        },
        width: 90,
      },
      { headerName: 'Author', field: 'author', editable: true, width: 175 },
    ];
  }
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  gridOptions: GridOptions;
}
