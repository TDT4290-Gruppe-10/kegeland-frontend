import { Box, Grid, GridItem } from '@chakra-ui/react';
import SidePanel from './SidePanel';
import { menuItemsType } from '../utils/Things';
import Header from './Header';

export const patientsMenuItems: menuItemsType = {
  allpatients: 'All my patients',
  lowactivity: '! Low activity',
  femfit: 'Femfit',
  more: 'More...',
};

const patientsMenuItemskeys = Object.keys(patientsMenuItems);

export const Layout: React.FC<any> = ({ children }) => {
  return (
    <Grid
      templateAreas={`"header header" "nav main" "footer footer"`}
      gridTemplateRows={'80px 1fr 30px'}
      gridTemplateColumns={'300px 1fr'}
      h="100%">
      <GridItem pl="2" area={'header'}>
        <Header />
      </GridItem>
      <GridItem area={'nav'} bgColor={'gray.100'}>
        <SidePanel />
      </GridItem>
      <GridItem pl="2" area={'main'}>
        <Box position="fixed" height="100%" overflow="auto"  flexGrow={1} pb="200px" pt="10px">
        {children}
        </Box>
      </GridItem>
      <GridItem
        pl="2"
        bg="blue.300"
        area={'footer'}
        position="fixed"
        bottom={0}
        width="100%">
        Kegeland - TDT4190 Group 10
      </GridItem>
    </Grid>
  );
};
