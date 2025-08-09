import React from 'react';
import { shallow } from 'enzyme';
import CohortDetails from './components/CohortDetails';
import { CohortData } from './components/Cohort';

describe("Cohort Details Component", () => {
  test("should create the component", () => {
    shallow(<CohortDetails cohort={CohortData[0]} />);
  });
});
