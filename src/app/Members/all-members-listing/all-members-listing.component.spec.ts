import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMembersListingComponent } from './all-members-listing.component';

describe('AllMembersListingComponent', () => {
  let component: AllMembersListingComponent;
  let fixture: ComponentFixture<AllMembersListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllMembersListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllMembersListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
