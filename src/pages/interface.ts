import { Chart } from 'chart.js';

export type SessionDataPoint = number | null;

export type Session = {
  id: string;
  userId: string;
  sensor: string;
  data: Record<string, SessionDataPoint[]>;
};

export type Sensor = {
  name: string;
  labels: string[];
};
