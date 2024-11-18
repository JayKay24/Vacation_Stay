import React from 'react';
import { useParams } from 'react-router-dom';
import useHTTPClient from '../hooks/useHTTPClient';
import { VacationStayComplete } from '../app_types/vacation_stay';

const DisplayVacationStay = () => {
    const { id: propertyID = '' } = useParams();
    const { data: vacationStay, isLoading } = useHTTPClient<VacationStayComplete>(propertyID);

    return (
        <>
            {isLoading && <span>Loading...</span>}
            {vacationStay &&
                (
                    <div>
                        <h2>{vacationStay.name}</h2>
                        <h3>{vacationStay.description}</h3>
                    </div>
                )
            }
        </>
    );
};

export default DisplayVacationStay;
