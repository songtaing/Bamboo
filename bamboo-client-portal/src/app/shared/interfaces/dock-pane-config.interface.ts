import { MenuItem } from 'primeng/api';
import { PrimeNGDockPositions } from '../enums/primeng-dock-positions.enum';

export interface IDockPaneConfig {
  items: MenuItem[];
  position: PrimeNGDockPositions;
}
