import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss'],
})
export class EntityListComponent implements OnInit {
  public dragged: any;
  @Input() data: any;
  // @Input() ids: string[];
  @Output() deleteColumn: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteCard: EventEmitter<any> = new EventEmitter<any>();
  @Output() openAddCardModal: EventEmitter<any> = new EventEmitter<any>();
  @Output() dragCardToList: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    let that = this;
    /* events fired on the draggable target */

    document.addEventListener(
      'dragstart',
      function (event) {
        // store a ref. on the dragged elem
        that.dragged = (<HTMLElement>event.target);
        // make it half transparent
        (<HTMLElement>event.target).style.opacity = '0.5';
      },
      false
    );

    document.addEventListener(
      'dragend',
      function (event) {
        // reset the transparency
        (<HTMLElement>event.target).style.opacity = '';
      },
      false
    );

    /* events fired on the drop targets */
    document.addEventListener(
      'dragover',
      function (event) {
        // prevent default to allow drop
        event.preventDefault();
      },
      false
    );

    document.addEventListener(
      'drop',
      function (event) {
        // prevent default action (open as link for some elements)
        event.preventDefault();
        // move dragged elem to the selected drop target
        if ((<HTMLElement>event.target).className !== 'mat-typography') {
          that.addCardToList(that.dragged.id, that.getListTo(event));
          that.deleteCardAction({
            title: that.dragged.id.split(':')[0],
            time: that.dragged.id.split(':')[1],
          });
        } else {
          (<HTMLElement>event.target).style.opacity = '1';
        }
      },
      false
    );
  }

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

  addCardToList(cardId, listTo) {
    this.dragCardToList.emit({
      cardId: cardId,
      listTo: listTo,
      listFrom: this.data.title.description,
    });
  }

  getListTo(event) {
    let node = event.target;
    let count = 0;
    while (node.className !== 'main dropzone' && count <= 5) {
      node = node.parentNode;
      count++;
    }
    if (node.className == 'main dropzone') {
      return node.children[0].children[0].innerText;
    }
    if(count > 5) {
      node = event.target;
      while (node.className !== 'topDiv') {
        node = node.children[0];
      }
    }
    return node.children[0].innerText;
  }
}
