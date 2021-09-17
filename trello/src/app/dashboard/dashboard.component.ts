import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalListComponent } from '../modal-list/modal-list.component';
import { TitleCardModalComponent } from '../title-card-modal/title-card-modal.component';
import { ListModel } from './addList.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public titleList: ListModel[] = [];
  constructor(public dialog: MatDialog, private ref: ChangeDetectorRef) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalListComponent, {
      width: '250px',
      data: { data: 'Add Title', title: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.titleList.push({ title: result, data: [] });
    });
  }

  deleteColumn(listTitle) {
    this.titleList.splice(
      this.titleList.findIndex((x) => x.title.description == listTitle),
      1
    );
  }
  Ti;
  openAddCardModal(listTitle) {
    const dialogRef = this.dialog.open(TitleCardModalComponent, {
      width: '250px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      let indx = this.titleList.findIndex(
        (x) => x.title.description == listTitle
      );
      this.titleList[indx].data.push({
        title: result.title,
        description: result.description,
        createDate: new Date(),
      });
      this.ref.markForCheck();
    });
  }
}
