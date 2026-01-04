import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BambooSharedLib } from './bamboo-shared-lib';

describe('BambooSharedLib', () => {
  let component: BambooSharedLib;
  let fixture: ComponentFixture<BambooSharedLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BambooSharedLib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BambooSharedLib);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
