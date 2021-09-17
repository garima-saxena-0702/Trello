import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title-card',
  templateUrl: './title-card.component.html',
  styleUrls: ['./title-card.component.scss']
})
export class TitleCardComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() createDate: string;
  @Input() timestamp: string;
  @Output() deleteCard: EventEmitter<any>  = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteCardAction() {
    this.deleteCard.emit({title: this.title, time: this.timestamp});
  }

}
