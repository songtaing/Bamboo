import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BaseComponent } from '../../shared/classes/base-component.class';
import { LoadingIndicatorTypes } from '../../shared/enums/loading-indicator-types.enum';
import { ILoadingIndicatorConfig } from '../../shared/interfaces/loading-indicator-config.interface';
import { LogService } from '../../shared/services/log.service';
import { LoadingIndicatorComponent } from '../../widgets/loading-indicator/loading-indicator.component';
import { ProjMgmtAddComponent } from '../proj-mgmt-add/proj-mgmt-add.component';
import { ProjectListComponent } from '../project-list/project-list.component';

@Component({
  selector: 'app-proj-mgmt-dashboard',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    LoadingIndicatorComponent,
    ProjectListComponent,
  ],
  templateUrl: './proj-mgmt-dashboard.component.html',
  styleUrl: './proj-mgmt-dashboard.component.scss',
})
export class ProjMgmtDashboardComponent extends BaseComponent {
  @ViewChild('projectList') projectList!: ProjectListComponent;

  loadingIndicatorConfig: ILoadingIndicatorConfig = {
    displayText: 'Loading...',
    type: LoadingIndicatorTypes.Spinner,
    mode: 'indeterminate',
  };

  constructor(logService: LogService, public dialog: MatDialog) {
    super(logService);
    this.logTraceFrame();
  }

  onAdd(): void {
    this.logTraceFrame();
    const dialogRef = this.dialog.open(ProjMgmtAddComponent, {
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((x) => {
      this.projectList.refresh();
    });
  }
}
