import ReduxProvider from "./ReduxPorvider";
import AuthContextProvider from "./AuthContextProvider";
const Provider = ({ children }) => {
  return (
    <ReduxProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </ReduxProvider>
  );
};

export default Provider;
