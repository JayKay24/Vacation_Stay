import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import VacationStayData from '../utils/mock-response-multiple.json';
import VacationStayCard from './VacationStayCard.component';
import { VacationStayFiltered } from '../app_types/vacation_stay';

describe('VacationStayCard.component: rendering', () => {
    it('renders a vacation title correctly', () => {
        const testID = 'unit-test-vacation';

        render(<VacationStayCard testid={testID} stay={VacationStayData.data[0] as unknown as VacationStayFiltered} />);

        const card = screen.getByTestId(testID);

        expect(card).not.toBeNull();

        const children = card.children;
        expect(children.length).toBeGreaterThanOrEqual(3);
        expect(card).toHaveTextContent(VacationStayData.data[0].name);
        expect(card).toHaveTextContent(VacationStayData.data[0].description);
    });
}); 