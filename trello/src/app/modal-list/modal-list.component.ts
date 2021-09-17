import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddListModel } from '../dashboard/addList.model';

@Component({
  selector: 'app-modal-list',
  templateUrl: './modal-list.component.html',
  styleUrls: ['./modal-list.component.scss']
})
export class ModalListComponent implements OnInit {
    form: FormGroup;
    description:string;


  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<ModalListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddListModel) {
      console.log(data);
      this.description = "";
     }

  ngOnInit(): void {
    this.form = this.fb.group({
        description: [this.description, []],
    });
  }

  save() {
      if(this.form.value)
        this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }

   

}
