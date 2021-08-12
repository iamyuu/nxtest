import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

import { Route, Link } from 'react-router-dom';

import { Title } from '@nxtest/ui';
import { EmployeeFeatureEmployeeInformation } from '@nxtest/employee/feature-employee-information';

export function App() {
  return (
    <h1>
      Welcome to a!
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/feature-employee-information">
              EmployeeFeatureEmployeeInformation
            </Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            <Title>This is the generated root route.</Title>
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route
        path="/feature-employee-information"
        component={EmployeeFeatureEmployeeInformation}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </h1>
  );
}

export default App;
