import { render } from '@testing-library/react';

import EmployeeFeatureEmployeeRequest from './employee-feature-employee-request';

describe('EmployeeFeatureEmployeeRequest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmployeeFeatureEmployeeRequest />);
    expect(baseElement).toBeTruthy();
  });
});
