import { Wrap, WrapItem, Avatar, Text } from '@chakra-ui/react';
import { AiOutlineUser } from 'react-icons/ai';

import { User } from '../state/ducks/auth/auth.interface';
import { renderName } from '../utils/renderName';

type UserAvatarProps = {
  user: User;
};

const UserAvatar: React.FC<UserAvatarProps> = ({ user }) => {
  return (
    <Wrap>
      <WrapItem alignItems="center">
        <Avatar
          size="xs"
          bg="primary.600"
          color="white"
          name={renderName(user.name)}
          icon={<AiOutlineUser />}
        />
        <Text paddingLeft={1} fontWeight={'semibold'}>
          {renderName(user.name)}
        </Text>
      </WrapItem>
    </Wrap>
  );
};

export default UserAvatar;
