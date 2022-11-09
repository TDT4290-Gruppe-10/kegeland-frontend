/* istanbul ignore file */
import { SensorType } from '../../sensors/sensors.interface';
import { Session } from '../sessions.interface';

const sessionsresponce: Session[] = [
  {
    id: 'xLsSlzvWMTBiZXDBm2wW',
    userId: 'userId',
    sensor: SensorType.FEMFIT,
    createdAt: 12345678910,
    data: {
      '123456': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    },
  },
  {
    id: '1PsHCDJEbWJ9b6SseSOH',
    userId: 'userId',
    sensor: SensorType.FEMFIT,
    createdAt: 12345678910,
    data: {
      '123456': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    },
  },
];

export default sessionsresponce;
