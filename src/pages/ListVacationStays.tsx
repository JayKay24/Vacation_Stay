import React from 'react';
import useHTTPClient from '../hooks/useHTTPClient';
import { Link } from 'react-router-dom';
import VacationStayCard from '../components/VacationStayCard.component';
import { APIResponseVacationStayFiltered } from '../app_types/vacation_stay';
import StyledListVacationStays from '../components/styled/pages/ListVacationStays.pages.styled';

const ListVacationStays = () => {
    const { data: vacationStays, isLoading } = useHTTPClient<APIResponseVacationStayFiltered>('filtered');

    return (
        <StyledListVacationStays>
            {isLoading && (<span>Loading...</span>)}
            {vacationStays?.data?.map(stay => (
                <div className="card-link">
                    <Link key={stay.id} to={`/vacation_stays/${stay.id}`}>
                        <VacationStayCard key={stay.id} stay={stay} testId='not-set' />
                    </Link>
                </div>
            ))}
        </StyledListVacationStays>
    );
};

export default ListVacationStays;
