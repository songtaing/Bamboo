import { Component, Input } from '@angular/core';
import { DockModule } from 'primeng/dock';
import { IDockPaneConfig } from '../../shared/interfaces/dock-pane-config.interface';
import { BaseComponent } from '../../shared/classes/base-component.class';
import { LogService } from '../../shared/services/log.service';
import { PrimeNGDockPositions } from '../../shared/enums/primeng-dock-positions.enum';

@Component({
  selector: 'app-dock-pane',
  standalone: true,
  imports: [DockModule],
  templateUrl: './dock-pane.component.html',
  styleUrl: './dock-pane.component.scss',
})
export class DockPaneComponent extends BaseComponent {
  @Input() config!: IDockPaneConfig;

  constructor(logService: LogService) {
    super(logService);
  }
}
