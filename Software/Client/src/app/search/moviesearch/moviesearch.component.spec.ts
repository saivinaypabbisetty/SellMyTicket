import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesearchComponent } from './moviesearch.component';

describe('MoviesearchComponent', () => {
  let component: MoviesearchComponent;
  let fixture: ComponentFixture<MoviesearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
