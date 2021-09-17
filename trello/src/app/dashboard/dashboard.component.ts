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
  public titleId: string[] = [];
  constructor(public dialog: MatDialog, private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    if(document.cookie) this.titleList = JSON.parse(document.cookie).list;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalListComponent, {
      width: '250px',
      data: { data: 'Add Title', title: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.titleList.push({ title: result, data: [] });
      this.titleId.push(result);
    });
  }

  deleteColumn(listTitle) {
    this.titleList.splice(
      this.titleList.findIndex((x) => x.title.description == listTitle),
      1
    );
    this.titleId.splice(this.titleId.findIndex(listTitle), 1)
    this.resetCookie();
    this.setCookie();
  }

  deleteCard(data) {
      let indx = this.titleList.findIndex((x) => x.title.description == data.listTitle)
      this.titleList[indx].data.splice(
        this.titleList[indx].data.findIndex((x) => x.title == data.cardTitle && x.timestamp == data.timestamp), 1
      );
      this.resetCookie();
      this.setCookie();
      this.ref.markForCheck();
  }
  
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
        createDate: new Date().toDateString(),
        timestamp: Date.now(),
      });
      this.resetCookie();
      this.setCookie();
      this.ref.markForCheck();
    });
  }

  resetCookie() {
    document.cookie = ''
  }

  setCookie() {
    document.cookie = JSON.stringify({list: this.titleList});
  }
}
