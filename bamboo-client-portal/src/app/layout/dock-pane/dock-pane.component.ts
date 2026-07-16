import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../shared/classes/base-component.class';
import { IDockPaneConfig } from '../../shared/interfaces/dock-pane-config.interface';
import { LogService } from '../../shared/services/log.service';

@Component({
  selector: 'app-dock-pane',
  standalone: true,
  imports: [],
  templateUrl: './dock-pane.component.html',
  styleUrl: './dock-pane.component.scss',
})
export class DockPaneComponent extends BaseComponent {
  @Input() config!: IDockPaneConfig;

  constructor(logService: LogService) {
    super(logService);
  }
}
