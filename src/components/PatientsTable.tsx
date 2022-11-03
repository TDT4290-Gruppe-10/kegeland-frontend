import { Button, Flex, useMediaQuery } from '@chakra-ui/react';
import { createColumnHelper, ColumnDef } from '@tanstack/react-table';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Patient } from '../state/ducks/patients/patients.interface';
import { renderName } from '../utils/renderName';

import DataTable from './DataTable';

type PatientsTableProps = {
  patients: Patient[];
};

const PatientsTable: React.FC<PatientsTableProps> = ({ patients }) => {
  const [isGreaterThanMd] = useMediaQuery('(min-width: 48em)');
  const navigate = useNavigate();

  const columnHelper = createColumnHelper<Patient>();
  const columns = React.useMemo<ColumnDef<Patient, any>[]>(
    () => [
      columnHelper.accessor('name', {
        header: 'Patient',
        cell: (props) => renderName(props.getValue()),
      }),
      ...(isGreaterThanMd
        ? [
            columnHelper.accessor('email', {
              header: 'E-mail',
              cell: (props) => props.getValue(),
            }),
          ]
        : []),
      {
        id: 'action',
        header: undefined,
        accessorKey: 'id',
        cell: (props) => (
          <Flex justifyContent="flex-end">
            <Button onClick={() => navigate(`/patients/${props.getValue()}`)}>
              Select
            </Button>
          </Flex>
        ),
      },
    ],
    [],
  );

  return <DataTable data={patients} columns={columns} />;
};

export default PatientsTable;
