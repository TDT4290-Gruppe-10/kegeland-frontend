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

        <Flex flexDir="column" h="100%" w="100%" justifyContent="flex-start">
          <Header toggleSidebar={toggle} isSidebarOpen={openSidebar} />
          <Flex
            zIndex={999}
            padding={5}
            flexDir="column"
            overflow="hidden"
            marginX="auto"
            w="100%"
            maxW={{
              base: 'container.sm',
              lg: 'container.md',
              xl: 'container.lg',
            }}>
            {children}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default withAuthUser(Layout);
