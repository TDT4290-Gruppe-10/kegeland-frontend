import { Container, Skeleton } from '@chakra-ui/react';
import { ComponentProps } from 'react';

type CardProps = {
  loading?: boolean;
  containerProps?: ComponentProps<typeof Skeleton>;
} & ComponentProps<typeof Container>;

const Card: React.FC<CardProps> = ({
  loading,
  children,
  containerProps,
  ...props
}) => {
  return (
    <Container
      w="100%"
      maxW={'100%'}
      paddingY={4}
      backgroundColor="white"
      shadow="sm"
      borderRadius={5}
      marginBottom={5}
      {...props}>
      <Skeleton isLoaded={!loading} w="inherit" h="inherit" {...containerProps}>
        {children}
      </Skeleton>
    </Container>
  );
};

export default Card;
