import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCurrComponent } from './show-curr.component';

describe('ShowCurrComponent', () => {
  let component: ShowCurrComponent;
  let fixture: ComponentFixture<ShowCurrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCurrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCurrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
