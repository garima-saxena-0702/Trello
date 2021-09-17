import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent implements OnInit {
  
  @Input() data: any;
  @Output() deleteColumn: EventEmitter<any>  = new EventEmitter<any>();
  @Output() openAddCardModal: EventEmitter<any>  = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

  deleteTitle(e) {
    this.deleteColumn.emit(e);
  }

  addCard(e) {
    this.openAddCardModal.emit(e);
  }

}
