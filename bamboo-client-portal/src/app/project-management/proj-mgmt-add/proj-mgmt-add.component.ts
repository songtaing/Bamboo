import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ToastrService } from 'ngx-toastr';
import { BaseComponent } from '../../shared/classes/base-component.class';
import { CacheKeys } from '../../shared/enums/cache-keys.enum';
import { IProjectManagementItem } from '../../shared/interfaces/project-management-item.interface';
import { CacheManagerService } from '../../shared/services/cache-manager.service';
import { LogService } from '../../shared/services/log.service';
import { ProjectManagementService } from '../../shared/services/project-management.service';

@Component({
  selector: 'app-proj-mgmt-add',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './proj-mgmt-add.component.html',
  styleUrl: './proj-mgmt-add.component.scss',
})
export class ProjMgmtAddComponent extends BaseComponent {
  item!: IProjectManagementItem;
  currentTheme!: string | null;

  addFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    projectNumber: new FormControl(''),
    primaryContactName: new FormControl(''),
    primaryContactPhone: new FormControl(''),
  });

  constructor(
    logService: LogService,
    private cache: CacheManagerService,
    private projService: ProjectManagementService,
    private toastr: ToastrService
  ) {
    super(logService);
    this.logTraceFrame();

    this.setTheme();
  }

  setTheme(): void {
    this.logTraceFrame();

    this.currentTheme = this.cache.get(CacheKeys.CurrentTheme);
  }

  onAdd(): void {
    this.logTraceFrame();

    if (this.addFormGroup.valid) {
      this.item = this.addFormGroup.value as IProjectManagementItem;

      this.projService.add(this.item).subscribe((x) => {
        this.toastr.success(
          `Successfully added project "${this.item.name}."`,
          'Added Project'
        );
        this.addFormGroup.reset();
      });
    }
  }
}
