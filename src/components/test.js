import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

export default function PublicPage() {
  return (
    <>
      <h3>Public</h3>
      <Switch>
        <Route path="/public/test">
          <TestPage />
        </Route>
      </Switch>
    </>
  );
}
function TestPage() {
  return <h3>TestPage</h3>;
}
