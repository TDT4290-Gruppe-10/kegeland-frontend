import {
  Box,
  Text,
  WrapItem,
  Divider,
  theme,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

function Patient(Patient: string, workout: any) {
  const pathname = useLocation().pathname.split("/");
  const firstPage = pathname[1];
  console.log(Patient, workout);

  return (
    <WrapItem>
      <LinkBox
        w="500px"
        p={["12", "12"]}
        bg="gray.100"
        borderRadius={20}
        pb="4"
      >
        <LinkOverlay
          href={firstPage + "/patient/" + Patient + "/overview"}
          display="flex-center"
          justifyContent="space-between"
        >
          <Box>{workout?.name} </Box>
          <Box>{workout?.age} years old </Box>
        </LinkOverlay>
        <Divider orientation="horizontal" borderColor={"blue.900"} />
        <Text fontSize="lg" mb="4"></Text>
      </LinkBox>
    </WrapItem>
  );
}

export default Patient;
