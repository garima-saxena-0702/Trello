import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddListModel } from '../dashboard/addList.model';

@Component({
  selector: 'app-modal-list',
  templateUrl: './modal-list.component.html',
  styleUrls: ['./modal-list.component.scss']
})
export class ModalListComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddListModel) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
