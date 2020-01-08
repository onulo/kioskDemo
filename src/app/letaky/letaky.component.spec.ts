import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetakyComponent } from './letaky.component';

describe('LetakyComponent', () => {
  let component: LetakyComponent;
  let fixture: ComponentFixture<LetakyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetakyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetakyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
