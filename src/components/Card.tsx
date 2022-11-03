import { Flex, Skeleton } from '@chakra-ui/react';
import { ComponentProps } from 'react';

type CardProps = {
  loading?: boolean;
  containerProps?: ComponentProps<typeof Skeleton>;
} & ComponentProps<typeof Flex>;

const Card: React.FC<CardProps> = ({
  loading,
  children,
  containerProps,
  ...props
}) => {
  return (
    <Flex
      display="flex"
      flexDir="column"
      flex={1}
      flexGrow={1}
      flexShrink={1}
      w="100%"
      maxW={'100%'}
      padding={4}
      backgroundColor="white"
      shadow="md"
      justify="center"
      align="center"
      borderRadius={5}
      marginBottom={5}
      {...props}>
      <Skeleton isLoaded={!loading} {...containerProps} h="100%" w="100%">
        {children}
      </Skeleton>
    </Flex>
  );
};

export default Card;
