import { Box, Flex, Icon, useMediaQuery } from '@chakra-ui/react';
import { MdMenu } from 'react-icons/md';

import Breadcrumbs from './Breadcrumbs';

type HeaderProps = {
  toggleSidebar: () => void;
};

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const [isGreaterThanMd] = useMediaQuery('(min-width: 48em)');

  return (
    <Box
      display="flex"
      paddingX={4}
      width={'100%'}
      height={'60px'}
      flexDirection="row"
      alignItems="center"
      bgColor="white"
      boxShadow="md"
      zIndex={1001}>
      <Flex
        flexDirection="row"
        alignItems="center"
        width="full"
        maxW="8xl"
        justifyItems="flex-start"
        justifyContent="flex-start"
        alignContent="flex-start">
        <Icon
          as={MdMenu}
          onClick={toggleSidebar}
          color="primary.600"
          transform="color 200ms"
          _hover={{ cursor: 'pointer', color: 'primary.700' }}
          aria-label="Toggle sidebar"
          width="40px"
          height="40px"
        />
        {isGreaterThanMd && <Breadcrumbs marginLeft="16" />}
      </Flex>
    </Box>
  );
};

export default Header;
