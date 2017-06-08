import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BussearchComponent } from './bussearch.component';

describe('BussearchComponent', () => {
  let component: BussearchComponent;
  let fixture: ComponentFixture<BussearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BussearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BussearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
