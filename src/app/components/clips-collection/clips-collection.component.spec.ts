import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipsCollectionComponent } from './clips-collection.component';

describe('ClipsCollectionComponent', () => {
  let component: ClipsCollectionComponent;
  let fixture: ComponentFixture<ClipsCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClipsCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipsCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
