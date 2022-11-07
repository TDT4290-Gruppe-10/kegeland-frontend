import { SensorType } from '../../state/ducks/sensors/sensors.interface';

export const session1 = {
  id: 'id',
  userId: 'userId',
  sensor: SensorType.FEMFIT,
  createdAt: 1235522,
};

export const sessions = [session1, session1];

export const session = {
  ...session1,
  data: { '1233': [1, 2, 3], '132': [1, 2, 3] },
};
