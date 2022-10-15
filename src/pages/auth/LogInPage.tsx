import {
  Box,
  Center,
  Container,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { sign } from "crypto";
import { Formik } from "formik";
import { InputControl, SubmitButton } from "formik-chakra-ui";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { signInUser } from "../../state/ducks/auth/auth.actions";
import { LoginDTO } from "../../state/ducks/auth/auth.interface";
import { AppDispatch, RootState } from "../../state/store";

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
  const { error, loading } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch<AppDispatch>()

  const signIn = (data: LoginDTO) => {
    dispatch(signInUser(data))
  }
  const { isSignedIn } = useSelector((state: RootState) => state.auth)
  const nav = useNavigate()
  console.log(isSignedIn)
  useEffect(() => {
      if (isSignedIn) {
          nav("/")
      }
  }, [])

  return (
    <Center width="100%" height="100vh">
      <Container>
        <Container paddingTop="1em">
          <Formik
            onSubmit={async (values, { setErrors }) => {
              signIn(values)
              // setErrors()
            }}
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
                onSubmit={(e: any) => {
                  e.preventDefault()
                  formProps.handleSubmit()
                }}
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
          <Box>{error}</Box>
        </Container>
      </Container>
    </Center>
  );
}

export default LogIn;
