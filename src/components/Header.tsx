import { Box, Button, Text, Tooltip } from "@chakra-ui/react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { signOutUser } from "../state/ducks/auth/auth.actions";
import { AppDispatch } from "../state/store";

const Header: React.FC<{ headerText: string }> = ({ headerText }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Box
      top={0}
      left={0}
      display={"flex"}
      position={"fixed"}
      width={"100%"}
      height={"80px"}
      bgColor={"blue.200"}
    >
      <Text fontWeight={500} fontSize={"24px"} margin={"auto"}>
        {headerText}
      </Text>
      <Tooltip hasArrow label="Log out">
        <Button
          bgColor={"blue.200"}
          margin={["auto", "20px"]}
          _hover={{ bgColor: "blue.200" }}
          justifyContent={"space-between"}
          onClick={() => dispatch(signOutUser())}
        >
          <RiLogoutBoxLine size={30} />
        </Button>
      </Tooltip>
    </Box>
  );
};

export default Header;
