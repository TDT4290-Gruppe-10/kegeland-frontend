import {
  Box,
  Badge,
  Text,
  Divider,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

function OverviewPatientCard(type: string, id: number, values: number) {
  const pathname = useLocation().pathname.split("/");
  const firstPage = pathname[1];


  return (
      <Box p="16">        
        {" "}
        <Badge borderRadius='full' px='180' colorScheme= "blue.100" style={{ fontSize: 25 }}>
       Overview of latest workout sessions
          </Badge>
        <Divider orientation="horizontal" borderColor={"blue.800"} />
        <Text fontSize="lg" mb="18"></Text>
        <Box display='flex' alignItems='center' mt="1" fontWeight="semibold" as="h4" lineHeight="tight"></Box>

        <Box>
     
            <Box borderRadius='lg' display='flex'  bg="white" w="100%" p={250} color="grey" overflow='hidden'>
              This is where the graph is gonna be
            </Box>
          </Box>

        <Box as="span" ml="2" color="blue.100" fontSize="sm"></Box>
      </Box>
  );
}

export default OverviewPatientCard;

