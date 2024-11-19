import React from 'react';
import { useParams } from 'react-router-dom';
import useHTTPClient from '../hooks/useHTTPClient';
import { APIResponseVacationStayComplete } from '../app_types/vacation_stay';

const DisplayVacationStay = () => {
    const { id: propertyID = '' } = useParams();
    const { data, isLoading } = useHTTPClient<APIResponseVacationStayComplete>(propertyID);

    return (
        <>
            {isLoading && <span>Loading...</span>}
            {data?.data &&
                (
                    <div>
                        <h2>{data?.data?.name}</h2>
                        <h3>{data?.data?.description}</h3>
                        <div>{data?.data?.guestVerificationMethod}</div>
                        <div>{data?.data?.address.apartment}</div>
                    </div>
                )
            }
        </>
    );
};

export default DisplayVacationStay;
