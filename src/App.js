import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";
import { Home, a, b } from "./components/Home";
import Header from "./components/Header";
export const AuthContext = React.createContext();
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  role: "admin"
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
        role: action.payload.role
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};
function App({ history }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {/* <Header /> */}

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
            {!state.isAuthenticated ? (
              <Login />
            ) : (
              // <Redirect to="/home/flights" />
              <Home />
            )}
          </Route>
          <Route
            path="/home"
            // component={`${state.isAuthenticated ? Login : Home}`}
          >
            {!state.isAuthenticated ? <Login /> : <Home />}
          </Route>
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}
export default App;
