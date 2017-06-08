import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostticketComponent } from './postticket.component';

describe('PostticketComponent', () => {
  let component: PostticketComponent;
  let fixture: ComponentFixture<PostticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
