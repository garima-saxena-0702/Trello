import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCardModalComponent } from './title-card-modal.component';

describe('TitleCardModalComponent', () => {
  let component: TitleCardModalComponent;
  let fixture: ComponentFixture<TitleCardModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleCardModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
