import React from 'react';
import { AddressFiltered } from '../app_types/vacation_stay';
import StyledFilteredAddress from './styled/components/FilteredAddress.component.styled';

const FilteredAddress: React.FC<{
    address: AddressFiltered,
    testid?: string
}> = ({ address, testid = 'not-set' }) => {
    return (
        <StyledFilteredAddress data-testid={testid}>
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
        </StyledFilteredAddress>
    );
};

export default FilteredAddress;