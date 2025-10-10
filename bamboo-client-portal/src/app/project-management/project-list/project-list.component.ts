import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { BaseComponent } from '../../shared/classes/base-component.class';
import { IProjectManagementItem } from '../../shared/interfaces/project-management-item.interface';
import { LogService } from '../../shared/services/log.service';
import { ProjectManagementService } from '../../shared/services/project-management.service';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss',
})
export class ProjectListComponent extends BaseComponent {
  rowData$ = new Subject<IProjectManagementItem[]>();
  rowData: IProjectManagementItem[] = [];

  constructor(
    logService: LogService,
    private pmService: ProjectManagementService
  ) {
    super(logService);
    this.logTraceFrame();

    this.bindEvents();
  }

  bindEvents(): void {
    this.logTraceFrame();

    this.rowData$.subscribe((x) => {
      this.rowData = x;
    });
  }

  getData(): void {
    this.logTraceFrame();

    this.pmService.getAll().subscribe((x) => {
      this.rowData$.next(x);
    });
  }

  public refresh(): void {
    this.logTraceFrame();

    this.getData();
  }
}
