import React from 'react';
import useHTTPClient from '../hooks/useHTTPClient';
import { Link } from 'react-router-dom';
import VacationStayCard from '../components/VacationStayCard.component';

const ListVacationStays = () => {
    const { data: vacationStays, isLoading } = useHTTPClient('filtered');

    return (
        <div>
            {isLoading && (<span>Loading...</span>)}
            {vacationStays.map(stay => (
                <Link key={stay.id} to={`/vacation_stays/${stay.id}`}>
                    <VacationStayCard key={stay.id} stay={stay} />
                </Link>
            ))}
        </div>
    );
};

export default ListVacationStays;
