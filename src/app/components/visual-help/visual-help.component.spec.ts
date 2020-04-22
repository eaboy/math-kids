import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualHelpComponent } from './visual-help.component';

describe('VisualHelpComponent', () => {
  let component: VisualHelpComponent;
  let fixture: ComponentFixture<VisualHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
