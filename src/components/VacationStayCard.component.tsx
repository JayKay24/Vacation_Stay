import React from 'react';
import { VacationStayFiltered } from '../app_types/vacation_stay';

const VacationStayCard: React.FC<{
    stay: VacationStayFiltered,
    testId: string
}> = ({ stay, testId = 'not-set' }) => {
    return (
        <div data-testId={testId}>
            <h2>{stay.name}</h2>
            <h3>{stay.description}</h3>
            <div>{stay._count.reviews}</div>
        </div>
    );
};

export default VacationStayCard;