import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { RootState } from "../../state/store";

const RequireAuthPage = () => {
  const { isSignedIn } = useSelector((state: RootState) => state.auth);
  const nav = useNavigate();
  useEffect(() => {
    if (!isSignedIn) {
      nav("/login");
    }
  });
  return isSignedIn ? <Outlet /> : <Navigate to={"/login"} />;
};

export default RequireAuthPage;
