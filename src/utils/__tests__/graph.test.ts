import {
  getLabelIndex,
  getSessionDuration,
  getXLabels,
  initGraphProfile,
} from '../graph.utils';
import { SensorType } from '../../state/ducks/sensors/sensors.interface';
import { session } from '../../components/mocks/sessions.mock';
import { sensor } from '../mocks/sensor.mock';
import { GraphProfile } from '../../state/ducks/settings/settings.interface';

describe('Test graph utils', () => {
  it('getLabelIndex should return 1', () => {
    const index = getLabelIndex(sensor, 's1');
    expect(index).toEqual(0);
  });

  it('getLabelIndex should return undefined', () => {
    const index = getLabelIndex(
      {
        id: 'sensorId',
        name: SensorType.FEMFIT,
        labels: ['s1', 's2', 's3'],
      },
      's4',
    );
    expect(index).toEqual(undefined);
  });

  it('getSessionDuration should return ', () => {
    const size = getSessionDuration(session);
    const newSize = 1101;
    expect(size).toEqual(newSize);
  });

  it('initGraphProfile should return Graph profile', () => {
    const graphProfile = initGraphProfile(sensor);
    const newGraphProfile: GraphProfile = {
      useTimedelta: false,
      labels: {
        s1: { plotType: 'line', hidden: false },
        s2: { plotType: 'line', hidden: false },
        s3: { plotType: 'line', hidden: false },
      },
    };
    expect(graphProfile).toEqual(newGraphProfile);
  });

  it('getXLabels should return list with x lables of delta time', () => {
    const xLabels = getXLabels([1, 2, 3, 4, 5, 6, 6, 6, 66], true);
    const newXLabels: number[] = [0, 1, 2, 3, 4, 5, 5, 5, 65];
    expect(xLabels).toEqual(newXLabels);
  });

  it('getXLabels should return list with x lables non delta time', () => {
    const xLabels = getXLabels([1, 2, 3, 4, 5, 6, 6, 6, 66], false);
    const newXLabels: string[] = [
      '1:00:00 AM',
      '1:00:00 AM',
      '1:00:00 AM',
      '1:00:00 AM',
      '1:00:00 AM',
      '1:00:00 AM',
      '1:00:00 AM',
      '1:00:00 AM',
      '1:00:00 AM',
    ];
    expect(xLabels).toEqual(newXLabels);
  });
});
