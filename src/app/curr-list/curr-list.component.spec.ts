import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrListComponent } from './curr-list.component';

describe('CurrListComponent', () => {
  let component: CurrListComponent;
  let fixture: ComponentFixture<CurrListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
