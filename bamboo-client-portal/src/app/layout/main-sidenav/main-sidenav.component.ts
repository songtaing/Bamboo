import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TreeNode } from 'primeng/api';
import {
  TreeModule,
  TreeNodeExpandEvent,
  TreeNodeSelectEvent,
} from 'primeng/tree';
import { BaseComponent } from '../../shared/classes/base-component.class';
import { IMenu } from '../../shared/interfaces/menu.interface';
import { LogService } from '../../shared/services/log.service';
import { MenuService } from '../../shared/services/menu.service';

@Component({
  selector: 'app-main-sidenav',
  standalone: true,
  imports: [TreeModule],
  templateUrl: './main-sidenav.component.html',
  styleUrl: './main-sidenav.component.scss',
})
export class MainSidenavComponent extends BaseComponent implements OnInit {
  menus: TreeNode<IMenu>[] = [];
  selectedMenu: TreeNode<IMenu> = {};

  constructor(
    logService: LogService,
    private menuService: MenuService,
    private router: Router
  ) {
    super(logService);
    this.logTraceFrame();
  }

  ngOnInit(): void {
    this.logTraceFrame();

    this.getMenus(0);
  }

  getMenus(menuId: number): void {
    this.logTraceFrame();

    this.menuService.getAll().subscribe((x) => {
      x.forEach((menu) => {
        this.menus.push(this.convertMenuToTreeNode(menu));
      });
    });
  }

  convertMenuToTreeNode(menu: IMenu): TreeNode<IMenu> {
    this.logTraceFrame();

    let node: TreeNode<IMenu> = {
      label: menu.title,
      key: menu.key,
      data: menu,
      leaf: menu?.children?.length === 0 ? false : true,
      expanded: menu.expanded,
      children: [],
    };

    menu.children?.forEach((x) => {
      node.children?.push(this.convertMenuToTreeNode(x));
    });

    return node;
  }

  onNodeSelect(evt: TreeNodeSelectEvent): void {
    this.logTraceFrame();
    this.selectedMenu = evt.node;

    switch (this.selectedMenu.key) {
      case 'news': {
        this.router.navigate(['news']);
        break;
      }
      case 'latest_news': {
        this.router.navigate(['news/latest']);
        break;
      }
      case 'project-management': {
        this.router.navigate(['pm/dashboard']);
        break;
      }
      case 'reminders': {
        this.router.navigate(['reminders']);
        break;
      }
      default: {
        break;
      }
    }
  }

  onNodeExpand(evt: TreeNodeExpandEvent): void {
    this.logTraceFrame();
  }
}
