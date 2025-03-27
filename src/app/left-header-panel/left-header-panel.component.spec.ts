import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftHeaderPanelComponent } from './left-header-panel.component';

describe('LeftHeaderPanelComponent', () => {
  let component: LeftHeaderPanelComponent;
  let fixture: ComponentFixture<LeftHeaderPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftHeaderPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftHeaderPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
