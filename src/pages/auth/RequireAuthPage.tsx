import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { RootState } from "../../state/store";

const RequireAuthPage = () => {
  const { isSignedIn } = useSelector((state: RootState) => state.auth);
  const nav = useNavigate();
  useEffect(() => {
    if (!isSignedIn) {
      nav("/login");
    }
  });
  return isSignedIn ? <Layout> <Outlet /></Layout> : <Navigate to={"/login"} />;
};

export default RequireAuthPage;
