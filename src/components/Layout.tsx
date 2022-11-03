import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import withAuthUser, { WithAuthUserProps } from '../hoc/withAuthUser';

import Header from './Header';
import Sidebar from './Sidebar';

type LayoutProps = {
  children?: React.ReactNode;
} & WithAuthUserProps;

const Layout: React.FC<LayoutProps> = ({ user, children }) => {
  const [isGreaterThanMd] = useMediaQuery('(min-width: 48em)');
  const [openSidebar, setOpenSidebar] = useState<boolean>(true);

  useEffect(() => {
    if (!isGreaterThanMd && openSidebar) {
      setOpenSidebar(false);
    }

    if (isGreaterThanMd && !openSidebar) {
      setOpenSidebar(true);
    }
  }, [isGreaterThanMd]);

  const toggle = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <Box h="100%" w="100%">
      <Flex flexDir="row">
        <Box position={isGreaterThanMd ? 'relative' : 'absolute'}>
          <Sidebar user={user} isOpen={openSidebar} />
        </Box>

        <Flex flexDir="column" flex={1} flexGrow={1}>
          <Header toggleSidebar={toggle} />
          <Box
            zIndex={999}
            flexDir="column"
            padding={5}
            marginX="auto"
            overflow="hidden"
            w="100%"
            maxW={{
              base: 'container.sm',
              md: 'container.md',
              xl: 'container.lg',
            }}>
            {children}
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default withAuthUser(Layout);
