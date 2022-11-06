import { ColumnDef } from '@tanstack/react-table';
import renderer from 'react-test-renderer';
import { SensorType } from '../../state/ducks/sensors/sensors.interface';
import Card from '../Card';
import DataTable from '../DataTable';

describe('Test DataTable', () => {
  it('renders correctlyu', () => {
    const tree = renderer
      .create(
        <DataTable
          data={[
            {
              id: 1,
              userId: 2,
              sensor: SensorType.FEMFIT,
              createdAt: 143535335,
            },
            {
              id: 2,
              userId: 2,
              sensor: SensorType.FEMFIT,
              createdAt: 143535335,
            },
            {
              id: 3,
              userId: 2,
              sensor: SensorType.FEMFIT,
              createdAt: 143535335,
            },
          ]}
          columns={[
            {
              accessorKey: 'date',
              header: 'Date',
            },
            {
              accessorKey: 'sesonr',
              header: 'Sensor',
            },
            {
              accessorKey: 'select',
              header: '',
            },
          ]}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
