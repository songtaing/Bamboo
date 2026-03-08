export interface IReminderSearchFilter {
  title?: string;
  startDate?: Date;
  endDate?: Date;
  isRecurring?: boolean;
  frequency?: number;
  frequencyInterval?: number;
}
