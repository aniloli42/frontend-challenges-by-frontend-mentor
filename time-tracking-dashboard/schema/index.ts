export interface sectionData {
  title: string;
  timeframes: Timeframes;
}

interface Timeframes {
  daily: Daily;
  weekly: Daily;
  monthly: Daily;
}

interface Daily {
  current: number;
  previous: number;
}

export type ActiveSection = 'daily' | 'monthly' | 'weekly';

export interface ChildrenContext {
  children: JSX.Element;
}

export interface ContextValue {
  activeSection: ActiveSection;
  toggleActive: (changeValue: ActiveSection) => void;
}
