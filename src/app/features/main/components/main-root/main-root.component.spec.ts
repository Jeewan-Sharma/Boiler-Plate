import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRootComponent } from './main-root.component';

describe('MainRootComponent', () => {
  let component: MainRootComponent;
  let fixture: ComponentFixture<MainRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainRootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
