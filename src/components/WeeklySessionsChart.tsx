import { ChartData, ChartOptions } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { useTheme } from '@chakra-ui/react';
import { merge } from 'lodash';

import { LeanSession } from '../state/ducks/sessions/sessions.interface';
import { groupByWeek } from '../utils/session.utils';
import { CustomTheme } from '../types';

type WeeklySessionsChartProps = {
  sessions: LeanSession[];
  numWeeks: number;
};

/**
 * initializer chart data
 * @param sessions sessions for a user
 * @param numWeeks number of weeks for chart
 * @param color color for chart
 * @returns chart data
 */
const initChartData = (
  sessions: LeanSession[],
  numWeeks: number,
  color: string,
): ChartData<'bar'> => {
  const groups = groupByWeek(sessions, numWeeks);
  return {
    labels: Object.keys(groups),
    datasets: [
      {
        label: 'Exercises',
        data: Object.values(groups),
        backgroundColor: color,
      },
    ],
  };
};

/**
 * Component that renders the weekly sessions chart for a user
 *
 * @param props the props
 * @see {@link WeeklySessionsChartProps}
 * @see {@link initChartData}
 */
const WeeklySessionsChart: React.FC<WeeklySessionsChartProps> = ({
  sessions,
  numWeeks,
}) => {
  const theme = useTheme<CustomTheme>();
  const chartData = initChartData(
    sessions,
    numWeeks,
    theme.colors.primary[600],
  );
  return (
    <div style={{ width: '99%' }}>
      <Bar
        height={200}
        options={merge(chartOptions, {
          plugins: {
            title: {
              display: true,
              text: `Exercises last ${numWeeks} weeks`,
            },
          },
        })}
        data={chartData}
      />
    </div>
  );
};

/**
 * Options for bar chart
 */
const chartOptions: ChartOptions<'bar'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
  scales: {
    y: {
      ticks: {
        precision: 0,
      },
    },
  },
};

export default WeeklySessionsChart;
