import { SensorType } from '../sensors/sensors.interface';

export type SessionDataPoint = number | null;

export type Session = {
  id: string;
  userId: string;
  sensor: SensorType;
  data: Record<string, SessionDataPoint[]>;
  createdAt: number;
};

export type SessionsState = {
  loading: boolean;
  session: Session | undefined;
  data: Session[];
  error: string | undefined;
};

export type FetchSessionsDto = {
  sensor?: SensorType;
  userId?: string;
};
