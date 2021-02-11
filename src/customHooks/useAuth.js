import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useAuth = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const history = useHistory();
  useEffect(() => {
    if (!currentUser) {
      history.push("/login");
    }
  }, [currentUser]);

  return currentUser;
};

export default useAuth;
