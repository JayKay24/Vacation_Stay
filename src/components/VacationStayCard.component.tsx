import React from 'react';
import { VacationStayFiltered } from '../app_types/vacation_stay';
import FilteredAddress from './FilteredAddress.component';


const VacationStayCard: React.FC<{
    stay: VacationStayFiltered,
    testId: string
}> = ({ stay, testId = 'not-set' }) => {
    return (
        <div data-testId={testId}>
            <h2>Name: {stay.name}</h2>
            <h3>Description: {stay.description}</h3>
            <div>Review Count: {stay._count.reviews}</div>
            <FilteredAddress address={stay.address} />
            <hr />
            <div className='property-images'>
                <img src={stay.propertyImages[0].images.url} />
            </div>
        </div>
    );
};

export default VacationStayCard;