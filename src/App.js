import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { Login } from "./components/login";
import { Home } from "./components/home";
export const AuthContext = React.createContext();
localStorage.clear();
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  role: "admin",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      localStorage.setItem("role", JSON.stringify(action.payload.role));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.role,
      };
    case "LOGOUT":
      localStorage.clear();
      useHistory().push("/");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
        role: null,
      };
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div className="container-fluid">
        {/* {!state.isAuthenticated ? <Login /> : <Home />} */}
        <Switch>
          <Route
            exact
            path="/"
            // component={`${state.isAuthenticated ? Login : Home}`}
            // render={() => {
            //   return !state.isAuthenticated ? <Login /> : <Home />;
            // }}
          >
            {state.isAuthenticated && localStorage.getItem("token") ? (
              <Home />
            ) : (
              <Login />
            )}
          </Route>
          <Route
            path="/home"
            // component={`${state.isAuthenticated ? Login : Home}`}
          >
            {state.isAuthenticated && localStorage.getItem("token") ? (
              <Home />
            ) : (
              <Login />
            )}
          </Route>
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}
export default App;
