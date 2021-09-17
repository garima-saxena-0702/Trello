import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss'],
})
export class EntityListComponent implements OnInit {
  @Input() data: any;
  @Input() ids: string[];
  @Output() deleteColumn: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteCard: EventEmitter<any> = new EventEmitter<any>();
  @Output() openAddCardModal: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  deleteTitle(e) {
    this.deleteColumn.emit(e);
  }

  deleteCardAction(e) {
    this.deleteCard.emit({
      cardTitle: e.title,
      listTitle: this.data.title.description,
      timestamp: e.time,
    });
  }

  addCard(e) {
    this.openAddCardModal.emit(e);
  }

  onTaskDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
