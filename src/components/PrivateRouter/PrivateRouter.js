import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const PrivateRouter = ({ element, ...props }) => {
  const { user } = useContext(UserContext);

  return user ? (
    <Route {...props} element={element} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRouter;
