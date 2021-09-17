import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalListComponent } from './modal-list/modal-list.component';
import { EntityListComponent } from './entity-list/entity-list.component';
import { TitleCardComponent } from './title-card/title-card.component';
import { TitleCardModalComponent } from './title-card-modal/title-card-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ModalListComponent,
    EntityListComponent,
    TitleCardComponent,
    TitleCardModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
