import { Text, Link, Box } from '@chakra-ui/react';
import { RiArrowGoBackLine } from 'react-icons/ri';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from '../index.module.scss';
import {
  exerciseMenuItems,
  patientMenuItems,
  patientsMenuItems,
  setSidePanelPath,
  setSidePanelProps,
} from '../state/ducks/layout/layout.reducer';
import useAppDispatch from '../hooks/useAppDispatch';
import useAppSelector from '../hooks/useAppSelector';

const Sidepanel: React.FC = () => {
  const dispatch = useAppDispatch();
  const { back, backPath, activePage } = useAppSelector(
    (state) => state.sidePanel,
  );
  const { patientId, exerciseId } = useParams();
  const [items, setItems] = useState(patientMenuItems);

  const getMenuItems = () => {
    if (patientId && !exerciseId) {
      dispatch(
        setSidePanelProps({
          back: true,
          activePage: patientMenuItems.overview,
          backPath: '/',
        }),
      );
      return patientMenuItems;
    }
    if (patientId && exerciseId) {
      dispatch(
        setSidePanelProps({
          back: true,
          activePage: exerciseMenuItems.graph,
          backPath: '/patient/' + patientId,
        }),
      );
      return exerciseMenuItems;
    } else {
      dispatch(
        setSidePanelProps({
          back: false,
          activePage: patientsMenuItems.allpatients,
          backPath: undefined,
        }),
      );
      return patientsMenuItems;
    }
  };

  useEffect(() => {
    setItems(getMenuItems());
  }, [patientId, exerciseId]);

  return (
    <Box
      width={'300px'}
      bgColor={'gray.100'}
      position={'fixed'}
      height="100%"
      fontSize={'24px'}>
      {back && (
        <Link
          className={styles.GoBack}
          href={backPath}
          borderBottomColor={'gray.400'}
          borderBottomStyle={'solid'}
          borderBottomWidth={'1px'}
          width={'300px'}>
          <RiArrowGoBackLine />
          <Text pl={2}>Go Back</Text>
        </Link>
      )}
      {Object.entries(items).map(([menuItem, menuItemText], i) => (
        <Box key={i}>
          {menuItemText === activePage ? (
            <Box
              display={'flex'}
              margin={'auto'}
              borderBottomColor={'gray.400'}
              borderBottomStyle={'solid'}
              borderBottomWidth={'1px'}>
              <Box w={'10px'} bgColor={'blue.200'}></Box>
              <Box margin={'8px'} marginLeft={'15px'} fontWeight={500}>
                {menuItemText}
              </Box>
            </Box>
          ) : (
            <Box
              borderBottomColor={'gray.400'}
              borderBottomStyle={'solid'}
              borderBottomWidth={'1px'}>
              <Box
                key={menuItem}
                onClick={() => dispatch(setSidePanelPath(menuItemText))}>
                <Box margin={'8px'} marginLeft={'25px'}>
                  {menuItemText}
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Sidepanel;
