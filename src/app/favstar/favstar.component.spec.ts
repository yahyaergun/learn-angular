import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavstarComponent } from './favstar.component';

describe('FavstarComponent', () => {
  let component: FavstarComponent;
  let fixture: ComponentFixture<FavstarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavstarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
