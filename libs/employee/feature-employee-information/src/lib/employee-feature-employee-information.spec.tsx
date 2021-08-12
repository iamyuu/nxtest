import { render } from '@testing-library/react';

import EmployeeFeatureEmployeeInformation from './employee-feature-employee-information';

describe('EmployeeFeatureEmployeeInformation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmployeeFeatureEmployeeInformation />);
    expect(baseElement).toBeTruthy();
  });
});
