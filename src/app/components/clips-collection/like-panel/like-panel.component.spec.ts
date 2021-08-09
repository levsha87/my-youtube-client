import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikePanelComponent } from './like-panel.component';

describe('LikePanelComponent', () => {
  let component: LikePanelComponent;
  let fixture: ComponentFixture<LikePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
