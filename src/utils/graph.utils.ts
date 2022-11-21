import { ChartData, ChartDataset } from 'chart.js';
import { size } from 'lodash';
import moment from 'moment';

import { GRAPH_COLORS } from '../constants/graph.constants';
import { Sensor } from '../state/ducks/sensors/sensors.interface';
import {
  Session,
  SessionDataPoint,
} from '../state/ducks/sessions/sessions.interface';
import {
  GraphLabels,
  GraphProfile,
} from '../state/ducks/settings/settings.interface';

/**
 * Get the label index
 * @param sensor the sesnor
 * @param key the key to find the index
 * @returns number
 */
export const getLabelIndex = (sensor: Sensor, key: string) => {
  const idx = sensor.labels.indexOf(key);
  return idx !== -1 ? idx : undefined;
};

/**
 * get the lenth of the session
 * @param session the session to find the durarion of
 */
export const getSessionDuration = (session: Session) => {
  if (size(session.data) > 1) {
    const ts = Object.keys(session.data);
    return Number(ts[ts.length - 1]) - Number(ts[0]);
  }
  return 0;
};

/**
 * Split the session data to the sensor labels
 * @param sensor the sensor
 * @param session the session
 */
export const splitSensorData = (sensor: Sensor, session: Session) => {
  const data: Array<SessionDataPoint[]> = Array.from(
    Array(sensor.labels.length),
    () => [],
  );
  Object.values(session.data).forEach((row) => {
    row.forEach((val, idx) => data[idx].push(val));
  });
  return data;
};

/**
 * The init graph profile
 * @param sensor the sensor
 */
export const initGraphProfile = (sensor: Sensor) => {
  return {
    useTimedelta: false,
    labels: sensor.labels.reduce((prev, curr) => {
      prev[curr] = {
        plotType: 'line',
        hidden: false,
      };
      return prev;
    }, {} as GraphLabels),
  } as GraphProfile;
};

/**
 * get the x labels
 * @param xData the timestamps
 * @param useDelta if the x labels should show in delta time
 */
export const getXLabels = (xData: number[], useDelta: boolean) => {
  if (useDelta) {
    return getTimedeltaLabels(xData);
  }
  return getDateLabels(xData);
};

/**
 * Get date x labels
 * @param xData the timestamps
 */
export const getDateLabels = (xData: number[]) => {
  return xData.map((val) => moment(val).format('LTS')); // new Date(Number(val)));
};

/**
 * Get the x labels for delta
 * @param xData the timestampls
 */
export const getTimedeltaLabels = (xData: number[]) => {
  const start = xData[0];
  return [0, ...xData.slice(1).map((val) => val - start)];
};

/**
 * init graph data
 * @param xData timestamps
 * @param yData the sensor data
 * @param profile the profile
 */
export const initChartData = (
  xData: (number | string)[],
  yData: SessionDataPoint[][],
  profile: GraphProfile,
): ChartData => {
  return {
    labels: xData,
    datasets: Object.entries(profile.labels).map(([key, val], idx) => {
      const color = getColor(idx);
      return {
        label: key,
        type: val.plotType,
        hidden: val.hidden,
        backgroundColor: color,
        borderColor: color,
        xAxisID: 'x',
        data: yData[idx],
      } as ChartDataset;
    }),
  };
};

/**
 * Get the colors
 * @param idx numbers of labels
 * @returns list of colors
 */
export const getColor = (idx: number) => {
  return GRAPH_COLORS[idx % GRAPH_COLORS.length];
};
