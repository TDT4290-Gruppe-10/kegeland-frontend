import { groupBy, reduce } from 'lodash';
import moment from 'moment';

import { LeanSession } from '../state/ducks/sessions/sessions.interface';

/**
 * Group the sessions into weeks
 * @param sessions the sessions to group
 * @param numWeeks number of weeks to group into
 */
export const groupByWeek = (sessions: LeanSession[], numWeeks: number) => {
  const currWeek = moment().week();
  const data = reduce(
    Array(numWeeks),
    (prev, _curr, idx) => {
      const week = currWeek - (numWeeks - idx - 1);
      prev[week] = 0;
      return prev;
    },
    {} as Record<number, number>,
  );
  const grouped = groupBy(sessions, (session) =>
    moment(session.createdAt).week(),
  );
  Object.entries(grouped).forEach(([week, values]) => {
    if (week in data) {
      data[Number(week)] = values.length;
    }
  });
  return data;
};

/**
 * Get number of session this week
 * @param sessions the sessions to get the number of session this week
 * @returns number of sessionss
 */
export const getNumSessionsThisWeek = (sessions: LeanSession[]) => {
  const currWeek = moment().week();
  const grouped = groupBy(sessions, (session) =>
    moment(session.createdAt).week(),
  );
  if (currWeek in grouped) {
    return grouped[currWeek].length;
  }
  return 0;
};

/**
 * Get last session by delta time
 * @param sessions the sessions to get the last sessions from
 * @returns the time since last session
 */
export const getLastSessionTimeDelta = (sessions: LeanSession[]) => {
  if (sessions.length > 0) {
    return moment(sessions[0].createdAt).fromNow();
  }
  return 0;
};
