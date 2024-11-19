import React from 'react';
import { AddressFiltered } from '../app_types/vacation_stay';
import StyledFilteredAddress from './styled/FilteredAddress.component.styled';

const FilteredAddress: React.FC<{
    address: AddressFiltered,
    testId?: string
}> = ({ address, testId = 'not-set' }) => {
    return (
        <StyledFilteredAddress data-testId={testId}>
            <p>Country: {address.country}</p>
            <p>County: {address.county}</p>
            <p>City: {address.city}</p>
            <p>Town: {address.town}</p>
            <p>Street: {address.street}</p>
            <p>Latitude: {address.latitude}</p>
            <p>Longitude: {address.longitude}</p>
        </StyledFilteredAddress>
    );
};

export default FilteredAddress;