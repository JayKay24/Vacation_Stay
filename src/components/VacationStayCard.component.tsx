import React from 'react';
import { VacationStayFiltered } from '../app_types/vacation_stay';
import FilteredAddress from './FilteredAddress.component';
import StyledVacationCard from './styled/components/VacationStayCard.component.styled';
import StyledCardHeader from './styled/components/VacationStayCardHeader.component.styled';
import StyledCardBody from './styled/components/VacationStayCardBody.component.styled';

const VacationStayCard: React.FC<{
    stay: VacationStayFiltered,
    testid: string
}> = ({ stay, testid = 'not-set' }) => {
    return (
        <StyledVacationCard data-testid={testid}>
            <StyledCardHeader>
                <img src={stay.propertyImages[0].images.url} />
            </StyledCardHeader>
            <hr />
            <StyledCardBody>
                <h2>{stay.name}</h2>
                <h3>{stay.description}</h3>
                <div>Review Count: {stay._count.reviews}</div>
                <FilteredAddress address={stay.address} />
            </StyledCardBody>
        </StyledVacationCard>
    );
};

export default VacationStayCard;