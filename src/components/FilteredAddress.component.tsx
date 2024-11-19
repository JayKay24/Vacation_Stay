import React from 'react';
import { AddressFiltered } from '../app_types/vacation_stay';

const FilteredAddress: React.FC<{
    address: AddressFiltered,
    testId?: string
}> = ({ address, testId = 'not-set' }) => {
    return (
        <div data-testId={testId}>
            <p>Country: {address.country}</p>
            <p>County: {address.county}</p>
            <p>City: {address.city}</p>
            <p>Town: {address.town}</p>
            <p>Street: {address.street}</p>
            <p>Latitude: {address.latitude}</p>
            <p>Longitude: {address.longitude}</p>
        </div>
    );
};

export default FilteredAddress;