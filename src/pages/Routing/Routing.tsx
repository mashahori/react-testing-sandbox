// import { useSelector } from "react-redux";
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter,
  useLocation,
} from "react-router-dom";

// import { authSelector } from "store/selectors";

import { Home } from "../Home";
import { Auth } from "../Auth";
import { NotFound } from "../NotFound";
// import { useRefreshToken } from "hooks/useRefreshToken";

// export const PrivateRoute = ({ element: Component, ...props }) => {
//   const location = useLocation();
//   // const isAuth = useSelector(authSelector);
//   const isAuth = true;

//   return (
//     <Route {...props}>
//       {!isAuth ? <Navigate to={{ pathname: "/auth/" }} /> : <Component />}
//     </Route>
//   );
// };

// const AuthRoute = ({ element: Component, ...props }) => {
//   // const isAuth = useSelector(authSelector);
//   const isAuth = true;

//   return (
//     <Route {...props}>
//       {isAuth ? <Navigate to={{ pathname: "/" }} /> : <Component />}
//     </Route>
//   );
// };

export const Routing = () => {
  // useRefreshToken();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/" element={<Auth />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
