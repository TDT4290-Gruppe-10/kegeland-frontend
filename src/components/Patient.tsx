import {
  Box,
  Text,
  WrapItem,
  Divider,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

interface PatientProps {
  name: string
  id: string
}

export const Patient: React.FC<PatientProps> = ({name, id}) => {
  const pathname = useLocation().pathname.split("/");
  const firstPage = pathname[1];

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
          href={firstPage + "/patient/" + id + "/overview"}
          display="flex-center"
          justifyContent="space-between"
        >
          <Box>{name}</Box>
        </LinkOverlay>
        <Divider orientation="horizontal" borderColor={"blue.900"} />
        <Text fontSize="lg" mb="4"></Text>
      </LinkBox>
    </WrapItem>
  );
}

export default Patient;
