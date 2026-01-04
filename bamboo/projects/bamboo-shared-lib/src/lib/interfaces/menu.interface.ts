export interface IMenu {
  menuId: number;
  key: string;
  title: string;
  children?: IMenu[];
  expanded?: boolean;
}
