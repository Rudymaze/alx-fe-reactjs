import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

// Function that checks if the user is authenticated
const isAuthenticated = () => {
  // Replace with your authentication logic, for instance checking if a token exists in local storage
  return localStorage.getItem("authToken") !== null;
};

// Custom Route component that checks for authentication
const PrivateRouteExample = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        // If authenticated, render the component
        <Component {...props} />
      ) : (
        // If not authenticated, redirect to the login page
        <Redirect to="/login" />
      )
    }
  />
);

const ProtectedRoute = () => (
  <Router>
    <div>
      <Switch>
        {/* Public route to Login component */}
        <Route path="/login" component={Login} />
        {/* Protected route to Dashboard component */}
        <PrivateRoute path="/dashboard" component={Dashboard} />
        {/* Default route to Home component */}
        <Route path="/">
          <h2>Home</h2>
        </Route>
      </Switch>
    </div>
  </Router>
);

export default ProtectedRoute;
