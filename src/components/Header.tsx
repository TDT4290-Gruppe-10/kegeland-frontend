import { Box, Text } from "@chakra-ui/react";

function Header(headerText: String) {
    return (
        <Box top={0} left={0} display={"flex"} position={"fixed"} width={"100%"} height={"80px"} bgColor={"blue.200"}>
            <Text fontWeight={500} fontSize={"24px"} margin={"auto"}>{headerText}</Text>
        </Box>
    );
}

export default Header;
