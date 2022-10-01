import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

const UserInfoContext:any = React.createContext(null);

function UserInfoContextProvider({ children }: any) {
  const [currentUser, setCurrentUser] = React.useState(null);

  const logOut = React.useCallback(() => {
    // Set currentUser to undefined in the context
    setCurrentUser(null);
    // Make a GET request to /users/logout/ to log out
    return axios.get("/users/logout/");
  }, []);

  const logIn = React.useCallback((email: any, password: any) => {
    // Make a POST request to /users/login/ with email and password to log in
    return axios.post("/users/login/", { email, password }).then((response) => {
      // Set currentUser to the returned user info
      setCurrentUser(response.data);
    });
  }, []);



  const ctxValue = React.useMemo(() => ({ currentUser, logOut, logIn }), [
    currentUser,
    logOut,
    logIn,
  ]);

  const type userInfoContextType = {
    currentUser: null,
    logOut: () => Promise<AxiosResponse<any, any>,
    logIn: (email: any, password: any) => Promise<void>,
  }


  React.useEffect(function checkIfLoggedIn() {
    axios
      .get("/users/current/")
      .then((response) => {
        // If the request is successful, it means we are logged in, so we can add the user object to the state
        setCurrentUser(response.data);
      })
      .catch((error) => {
        if (error?.response?.status === 404) {
          /* A 404 status means we are not logged in. That is not an issue, so we can ignore this error */
          return;
        }
        // If something else is wrong, reraise the error so it shows in the console
        throw error;
      });
  }, []);

  return (
    <UserInfoContext.Provider value={ctxValue}>
      {children}
    </UserInfoContext.Provider>
  );
}

UserInfoContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useUserInfoContext: = () => React.useContext(UserInfoContext);

//export const useCurrentUser = () =>
  //React.useContext(UserInfoContext)?.currentUser;

export default UserInfoContextProvider;
