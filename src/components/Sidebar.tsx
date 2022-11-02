import { Box, Button, ScaleFade, VStack } from '@chakra-ui/react';
import {
  AiOutlineProfile,
  AiOutlineTeam,
  AiOutlineRise,
  AiOutlineSetting,
} from 'react-icons/ai';

import { User } from '../state/ducks/auth/auth.interface';
import useAppDispatch from '../hooks/useAppDispatch';
import { signOutUser } from '../state/ducks/auth/auth.actions';

import Menu from './Menu';
import UserAvatar from './UserAvatar';

type SidebarProps = {
  user: User;
  isOpen: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ user, isOpen }) => {
  const dispatch = useAppDispatch();

  return (
    <Box
      position="sticky"
      top={0}
      minH="100vh"
      height="full"
      alignSelf="stretch"
      bg="white"
      width={isOpen ? '300px' : '0px'}
      paddingX={isOpen ? 2 : 0}
      maxW="300px"
      boxShadow="md"
      zIndex={1000}
      transition="width 200ms, top 50ms">
      <ScaleFade in={isOpen}>
        <Menu title="Dashboard" head={<UserAvatar user={user} />}>
          <Menu.Item title="Patients" to={'/'} icon={AiOutlineTeam} />
          <Menu.Item
            title="Edit Questionnaires"
            to={'/foo0'}
            icon={AiOutlineProfile}
          />
          <Menu.Item title="Edit Exercises" to={'/foo1'} icon={AiOutlineRise} />
          <Menu.Item title="Settings" to={'/foo2'} icon={AiOutlineSetting} />
        </Menu>
        <VStack width="full" transition="bottom 200ms">
          <Button
            width="full"
            variant="ghost"
            onClick={() => dispatch(signOutUser())}>
            Sign out
          </Button>
        </VStack>
      </ScaleFade>
    </Box>
  );
};

export default Sidebar;
