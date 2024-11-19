import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import VacationStayData from '../utils/mock-response-single.json';
import CompleteAddress from './CompleteAddress.component';
import { VacationStayComplete } from '../app_types/vacation_stay';

describe('CompleteAddress.component: rendering', () => {
    it('renders a vacation title correctly', () => {
        const testID = 'unit-test-vacation';

        render(<CompleteAddress testid={testID} address={VacationStayData.data.address as unknown as VacationStayComplete} />);

        const filteredAddress = screen.getByTestId(testID);

        expect(filteredAddress).not.toBeNull();
        expect(filteredAddress).toHaveTextContent(VacationStayData.data.address.country);
        expect(filteredAddress).toHaveTextContent(VacationStayData.data.address.county);
        expect(filteredAddress).toHaveTextContent(VacationStayData.data.address.postCode);
    });
});