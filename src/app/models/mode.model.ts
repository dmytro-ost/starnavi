export interface Mode {
  id: string;
  name: MODE;
  field: number;
}

export enum MODE {
  EASY = 'Easy',
  NORMAL = 'Normal',
  HARD = 'Hard'
}
