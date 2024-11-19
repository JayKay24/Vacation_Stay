import React from 'react';
import { VacationStayFiltered } from '../app_types/vacation_stay';
import FilteredAddress from './FilteredAddress.component';
import StyledVacationCard from './styled/VacationStayCard.component.styled';
import StyledCardHeader from './styled/VacationStayCardHeader.component.styled';


const VacationStayCard: React.FC<{
    stay: VacationStayFiltered,
    testId: string
}> = ({ stay, testId = 'not-set' }) => {
    return (
        <StyledVacationCard data-testId={testId}>
            <StyledCardHeader>
                <img src={stay.propertyImages[0].images.url} />
            </StyledCardHeader>
            <hr />
            <div>
                <h2>Name: {stay.name}</h2>
                <h3>Description: {stay.description}</h3>
                <div>Review Count: {stay._count.reviews}</div>
                <FilteredAddress address={stay.address} />
            </div>
        </StyledVacationCard>
    );
};

export default VacationStayCard;