import { VStack, Text, Divider, HStack, Icon, Box } from '@chakra-ui/react';
import { ComponentProps } from 'react';
import { IconType } from 'react-icons/lib';
import { Link, To } from 'react-router-dom';

type MenuItemProps = {
  title: string;
  to: To;
  icon?: IconType;
};

const Item: React.FC<MenuItemProps> = ({ title, to, icon }) => {
  return (
    <HStack
      spacing={1}
      marginBottom={2}
      width="full"
      _hover={{ color: 'primary.600', cursor: 'pointer' }}
      transitionDuration="300ms">
      {icon && <Icon as={icon} color="primary.600" fontSize={24} />}
      <Link to={to}>
        <Text fontWeight="semibold">{title}</Text>
      </Link>
    </HStack>
  );
};

type MenuComponents = {
  Item: typeof Item;
};

type MenuProps = {
  title: string;
  head?: React.ReactNode;
  children?: React.ReactNode;
} & ComponentProps<typeof VStack>;

const Menu: React.FunctionComponent<MenuProps> & MenuComponents = ({
  title,
  head,
  children,
  ...props
}) => {
  return (
    <VStack
      {...props}
      width="full"
      spacing={2}
      paddingTop={4}
      alignItems="flex-start">
      {head && <Box paddingBottom={2}>{head}</Box>}
      {head && <Divider />}
      <Text
        color="primary.600"
        fontWeight="semibold"
        width="full"
        textTransform="uppercase">
        {title}
      </Text>
      {children}
      <Divider />
    </VStack>
  );
};

Menu.Item = Item;

export default Menu;
