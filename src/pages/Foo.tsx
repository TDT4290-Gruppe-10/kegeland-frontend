import { Chart } from 'react-chartjs-2';
import { clone } from 'lodash';
import zoomPlugin from 'chartjs-plugin-zoom';
import {
  Chart as ChartJS,
  BubbleDataPoint,
  ChartData,
  ChartOptions,
  ChartType,
  ScatterDataPoint,
} from 'chart.js';
import 'chart.js/auto';
import { Select } from '@chakra-ui/react';
import { useState, useEffect, useRef } from 'react';

import { colors } from './colors';
import { sensor, session } from './data';
import { SessionDataPoint } from './interface';

ChartJS.register(zoomPlugin);

export const options: ChartOptions = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: true,
  },
  scales: {
    y: {
      stacked: false,
    },
    x: {
      stacked: false,
      position: 'bottom',
      type: 'category',
    },
    x2: {
      display: false,
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
    zoom: {
      zoom: {
        mode: 'xy',
        wheel: {
          enabled: true,
        },
      },
      pan: {
        enabled: true,
        mode: 'xy',
      },
    },
  },
};

const getColor = (idx: number) => {
  return colors[idx % colors.length];
};

const timestampToTimeDelta = (timestamps: string[]) => {
  const deltas: number[] = [];
  timestamps.forEach((timestamp, idx) => {
    if (idx !== 0) {
      deltas.push(Number(timestamp) - Number(timestamps[0]));
    }
  });
  return deltas;
};

const splitSensorData = () => {
  const data: Array<SessionDataPoint[]> = Array.from(
    Array(sensor.labels.length),
    () => [],
  );
  Object.values(session.data).forEach((row) => {
    row.forEach((val, idx) => data[idx].push(val));
  });
  return data;
};

// const convertNumberChartData = (): ChartData<'line'> => {
//   const yData = splitSensorData();
//   const xData = Object.keys(session.data);
//   return {
//     labels: xData,
//     datasets: sensor.labels.map((label, idx) => ({
//       label,
//       data: yData[idx],
//     })),
//   };
// };

// const convertScatterDataPoint = (): ChartData<'scatter'> => {
//   const yData = splitSensorData();
//   return {
//     datasets: sensor.labels.map((label, idx) => ({
//       label,
//       data: yData[idx].map((val, idx) => ({
//         x: idx,
//         y: val === null ? 0 : val,
//       })),
//     })),
//   };
// };

// const convertBubbleDataPoint = () => {};

// const fitData = (plotType: ChartType): ChartData => {
//   const yData = splitSensorData();
//   const xData = Object.keys(session.data);
//   switch (plotType) {
//     case 'bar':
//     case 'line':
//       return convertNumberChartData();
//     case 'scatter':
//       return convertScatterDataPoint();
//     default:
//       return {
//         labels: xData,
//         datasets: [],
//       };
//   }
// };

const initLabelPlots = (
  xData: (string | number)[],
  yData: SessionDataPoint[][],
  labels: string[],
): ChartData => {
  return {
    labels: xData,
    datasets: labels.map((label, idx) => {
      const color = getColor(idx);
      return {
        type: 'line' as const,
        hidden: true,
        backgroundColor: color,
        borderColor: color,
        xAxisID: 'x',
        label,
        data: yData[idx],
      };
    }),
  };
};

const initLabelPlotTypes = () => {
  return sensor.labels.reduce((prev, curr) => {
    prev[curr] = 'line';
    return prev;
  }, {} as Record<string, ChartType>);
};

const Foo = () => {
  const yDataRef = useRef<SessionDataPoint[][]>(splitSensorData());
  const xDataRef = useRef<number[]>(
    timestampToTimeDelta(Object.keys(session.data)),
  );
  const [redraw, setRedraw] = useState<boolean>(false);
  const [label, setLabel] = useState<string>(sensor.labels[0]);
  const [value, setValue] = useState<ChartType>('line');
  const [plotType, setPlotType] = useState<Record<string, ChartType>>(
    initLabelPlotTypes(),
  );
  const [chartData, setChartData] = useState<ChartData>(
    initLabelPlots(xDataRef.current, yDataRef.current, sensor.labels),
  );

  useEffect(() => {
    setValue(plotType[label]);
  }, [label]);

  const handleSelectLabel = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLabel(event.target.value);
  };

  const handleSelectPlot = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(chartData);
    const val = event.target.value as ChartType;
    setValue(val);
    setPlotType({ ...plotType, [label]: val });
    updatePlotType(val);
  };

  const updatePlotType = (type: ChartType) => {
    const labelIdx = sensor.labels.indexOf(label);
    const labelYData = yDataRef.current[labelIdx];

    let newData: (number | ScatterDataPoint | BubbleDataPoint | null)[] = [];
    let xAxisID = 'x';
    switch (plotType[label]) {
      case 'scatter':
        newData = labelYData.map((val, idx) => ({
          x: Number(xDataRef.current[idx]),
          y: val === null ? 0 : val,
        }));
        xAxisID = 'x2';
        break;
      default:
        newData = labelYData;
        break;
    }
    console.log(type);
    const newChartData = clone(chartData);
    const dataset = chartData.datasets[labelIdx];
    newChartData.datasets[labelIdx] = {
      ...dataset,
      type,
      xAxisID,
      data: newData,
    } as any;
    setRedraw(true);
    setChartData(newChartData);
  };

  useEffect(() => {
    setTimeout(() => {
      setRedraw(false);
    }, 100);
    console.log(redraw);
  }, [chartData]);

  return (
    <div>
      <Select value={label} onChange={handleSelectLabel}>
        {sensor.labels.map((label) => (
          <option key={label} value={label}>
            {label}
          </option>
        ))}
      </Select>
      <Select value={value} onChange={handleSelectPlot}>
        <option value="line">Line plot</option>
        <option value="bar">Bar plot</option>
        <option value="scatter">Scatter plot</option>
      </Select>
      <Chart type="line" options={options} data={chartData} redraw={redraw} />
    </div>
  );
  //   return <Line options={options} data={data} />;
};

export default Foo;
