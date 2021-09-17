import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CardModel } from '../dashboard/addList.model';

@Component({
  selector: 'app-title-card-modal',
  templateUrl: './title-card-modal.component.html',
  styleUrls: ['./title-card-modal.component.scss']
})
export class TitleCardModalComponent implements OnInit {

  form: FormGroup;
  description: string = '';
  title: string = '';
  
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<TitleCardModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
     this.form = this.fb.group({
       description: [this.description, []],
       title: [this.title, []]
     });
  }

  save() {
        this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }

}
