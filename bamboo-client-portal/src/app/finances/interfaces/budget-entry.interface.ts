import { BudgetCategories } from '../../shared/enums/budget-categories.enum';
import { BudgetTypes } from '../../shared/enums/budget-types.enum';

export interface IBudgetEntry {
  id: number;
  name: string;
  description: string;
  timestamp: Date;
  amount: number;
  budgetType: BudgetTypes;
  budgetCategory: BudgetCategories;
}
