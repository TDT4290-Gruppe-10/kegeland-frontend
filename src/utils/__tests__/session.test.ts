import { session } from '../../components/mocks/sessions.mock';
import {
  getLastSessionTimeDelta,
  getNumSessionsThisWeek,
  groupByWeek,
} from '../session.utils';
import moment from 'moment';

describe('Test sesison utils', () => {
  it('groupByWeek should return currenct week and 0', () => {
    const currWeek = moment().week();
    const state = groupByWeek([session], 1);
    expect(state).toEqual({ [currWeek]: 0 });
  });

  it('getNumSessionsThisWeek should return undefined', () => {
    const index = getNumSessionsThisWeek([session]);
    expect(index).toEqual(0);
  });

  it('getLastSessionTimeDelta should return ', () => {
    const size = getLastSessionTimeDelta([]);
    expect(size).toEqual(0);
  });
});
