import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';

export class deleteIconRenderer implements ICellRendererComp {
  eGui!: HTMLDivElement;
  // eButton: any;
  // eValue: any;
  //   cellValue: any;
  //   eventListener!: () => void;

  onDelete() {
    console.log('hi');
  }

  init(params: ICellRendererParams) {
    this.eGui = document.createElement('div');
    this.eGui.innerHTML = `
        <div>
            <button class="btn-simple" onclick=onDelete()><i class="fa-solid fa-trash-can"></i>Delete</button>
        </div>
     `;
    // this.eButton = this.eGui.querySelector('.btn-simple');
    // this.eValue = this.eGui.querySelector('.trash-can');
  }

  getGui() {
    return this.eGui;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
