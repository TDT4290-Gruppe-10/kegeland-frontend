import {
  Box,
  Center,
  Container,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Formik, FormikErrors } from "formik";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useUserInfoContext } from "../../contexts/UserInfoContext";

const validateSchema = Yup.object({
  email: Yup.string()
    .required()
    .email("Email is not valid")
    .label("Email"),
  password: Yup.string()
    .required()
    .label("Password"),
});

function LogIn() {
  const navigate = useNavigate();
  const { search } = useLocation();

  const userContext = useUserInfoContext();
  return (
    <Center width="100%" height="100vh">
      <Container>
        <Container paddingTop="1em">
          <Formik
            onSubmit={(values, { setErrors }) =>
              // Use the userContext to log in
              userContext
                .logIn(values.email, values.password)
                .then(() => navigate("/"))
                // If something goes wrong, set form errors
                .catch((error: { response: { data: FormikErrors<{}> } }) =>
                  setErrors(error.response.data)
                )
            }
            initialValues={{ email: "", password: "" }}
            validationSchema={validateSchema}
          >
            {(formProps) => (
              <Box
                borderWidth="1px"
                rounded="lg"
                shadow="1px 1px 3px rgba(0,0,0,0.3)"
                maxWidth={800}
                p={6}
                m="10px auto"
                as="form"
                onSubmit={() => formProps.handleSubmit}
              >
                <VStack spacing={5} align="stretch">
                  <Box>
                    <Heading as="h3" size="lg" textAlign="center">
                      Log in{" "}
                    </Heading>
                  </Box>
                  <Box>
                    <Heading as="h3" size="lg" textAlign="center">
                      Please enter email and password to log in.
                    </Heading>
                  </Box>
                  <Box>
                    <InputControl
                      inputProps={{
                        type: "email",
                        placeholder: "ola.nordmann@example.com",
                      }}
                      name="email"
                      isRequired
                      label="Email address"
                      data-testid="email-input"
                    />
                  </Box>
                  <Box>
                    <InputControl
                      isRequired
                      name="password"
                      label="Password"
                      data-testid="password-input"
                      inputProps={{
                        type: "password",
                        autoComplete: "password",
                        placeholder: "• • • • • • • •",
                      }}
                    />
                  </Box>
                  <Box textAlign="right">
                    <SubmitButton
                      isLoading={formProps.isSubmitting}
                      isDisabled={!formProps.isValid}
                      style={{ backgroundColor: "#273587", color: "#FFFFFF" }}
                    >
                      Log in
                    </SubmitButton>
                  </Box>
                  <Box textAlign="left">
                    <Text color="#black">
                      Not a member yet?
                      <Link color="#273587" href="/register">
                        <b> Register!</b>
                      </Link>
                    </Text>
                  </Box>
                </VStack>
              </Box>
            )}
          </Formik>
        </Container>
      </Container>
    </Center>
  );
}

export default LogIn;