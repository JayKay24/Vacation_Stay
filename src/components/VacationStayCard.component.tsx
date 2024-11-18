import React from 'react';
import { VacationStayFiltered } from '../app_types/vacation_stay';

const VacationStayCard: React.FC<{
    stay: VacationStayFiltered
}> = ({ stay }) => {
    return (
        <div>
            <div>{stay.name}</div>
            <div>{stay.description}</div>
            <div>{stay._count.reviews}</div>
        </div>
    );
};

export default VacationStayCard;