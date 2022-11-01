import { HStack, IconButton, Tooltip } from '@chakra-ui/react';
import { capitalize } from 'lodash';
import moment from 'moment';
import {
  MdDock,
  MdDownload,
  MdOutlineWatchLater,
  MdSettings,
} from 'react-icons/md';

import LabeledValue from '../../../../components/LabeledValue';
import { Sensor } from '../../../../state/ducks/sensors/sensors.interface';
import { Session } from '../../../../state/ducks/sessions/sessions.interface';
import { getSessionDuration } from '../../../../utils/graph.utils';

type GraphHeaderProps = {
  sensor: Sensor;
  session: Session;
  toggleSettings: () => void;
};

const GraphHeader: React.FC<GraphHeaderProps> = ({
  sensor,
  session,
  toggleSettings,
}) => {
  return (
    <HStack justifyContent="space-between">
      <HStack spacing={12}>
        <LabeledValue
          label="Date of exercise"
          value={moment.unix(session.createdAt).format('lll')}
        />

        <LabeledValue
          label="Device"
          icon={MdDock}
          value={capitalize(sensor.name)}
        />

        <LabeledValue
          label="Duration"
          icon={MdOutlineWatchLater}
          value={`${getSessionDuration(session).toFixed(0)}s`}
        />
      </HStack>
      <HStack spacing={0}>
        <IconButton
          aria-label="Open graph settings"
          icon={<MdSettings />}
          variant="unstyled"
          fontSize={22}
          color="gray.700"
          _hover={{ color: 'gray.600' }}
          onClick={toggleSettings}
        />
        <Tooltip label="Download data as csv">
          <IconButton
            aria-label="Download exercise data"
            icon={<MdDownload />}
            variant="unstyled"
            fontSize={22}
            color="gray.700"
            _hover={{ color: 'gray.600' }}
            onClick={toggleSettings}
          />
        </Tooltip>
      </HStack>
    </HStack>
  );
};

export default GraphHeader;
