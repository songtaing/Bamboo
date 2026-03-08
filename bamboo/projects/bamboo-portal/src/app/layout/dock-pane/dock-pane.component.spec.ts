import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockPaneComponent } from './dock-pane.component';
import { IDockPaneConfig } from '../../shared/interfaces/dock-pane-config.interface';
import { PrimeNGDockPositions } from '../../shared/enums/primeng-dock-positions.enum';

describe('DockPaneComponent', () => {
  let component: DockPaneComponent;
  let fixture: ComponentFixture<DockPaneComponent>;
  let configMock: IDockPaneConfig = {
    items: [],
    position: PrimeNGDockPositions.Left,
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DockPaneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DockPaneComponent);
    component = fixture.componentInstance;
    component.config = configMock;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
