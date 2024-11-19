import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import VacationStayData from '../utils/mock-response-multiple.json';
import FilteredAddress from './FilteredAddress.component';
import { VacationStayFiltered } from '../app_types/vacation_stay';

describe('FilteredAddress.component: rendering', () => {
    it('renders a vacation title correctly', () => {
        const testID = 'unit-test-vacation';

        render(<FilteredAddress testid={testID} address={VacationStayData.data[0].address as unknown as VacationStayFiltered} />);

        const filteredAddress = screen.getByTestId(testID);

        expect(filteredAddress).not.toBeNull();
        expect(filteredAddress).toHaveTextContent(VacationStayData.data[0].address.country);
        expect(filteredAddress).toHaveTextContent(VacationStayData.data[0].address.county);
    });
});