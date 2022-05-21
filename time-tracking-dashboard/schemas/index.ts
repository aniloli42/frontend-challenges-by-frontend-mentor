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
