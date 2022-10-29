import { DeviceType } from '../questionnaires/questionnaries.interface';

export type ExerciseSession = {
  sensor: DeviceType;
  data: number[][];
};

export interface SensorState {
  loading: boolean;
  error?: string;
  sessionData: ExerciseSession | undefined;
}
