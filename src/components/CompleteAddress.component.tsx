import React from 'react';
import { AddressComplete } from '../app_types/vacation_stay';

const CompleteAddress: React.FC<{
    address: AddressComplete,
    testid?: string
}> = ({ address, testid = 'not-set' }) => {
    return (
        <div data-testid={testid}>
            <p>
                <strong>Country:</strong> {address.country}
            </p>
            <p>
                <strong>County:</strong> {address.county}
            </p>
            <p>
                <strong>City:</strong> {address.city}
            </p>
            <p>
                <strong>Town:</strong> {address.town}
            </p>
            <p>
                <strong>Street:</strong> {address.street}
            </p>
            <p>
                <strong>Latitude:</strong> {address.latitude}
            </p>
            <p>
                <strong>Longitude:</strong> {address.longitude}
            </p>
            <p>
                <strong>Physical Address:</strong> {address.physicalAddress}
            </p>
            <p>
                <strong>Postcode:</strong> {address.postCode}
            </p>
        </div>
    );
};

export default CompleteAddress;