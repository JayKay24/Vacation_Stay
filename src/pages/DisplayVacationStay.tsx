import React from 'react';
import { useParams } from 'react-router-dom';
import useHTTPClient from '../hooks/useHTTPClient';
import { APIResponseVacationStayComplete } from '../app_types/vacation_stay';
import StyledMealOptions from '../components/styled/components/MealOptions.component.styled';
import StyledDisplayVacationStay from '../components/styled/pages/DisplayVacationStay.pages.styled';
import StyledRoom from '../components/styled/components/Room.component.styled';

const DisplayVacationStay = () => {
    const { id: propertyID = '' } = useParams();
    const { data: response, isLoading } = useHTTPClient<APIResponseVacationStayComplete>(propertyID);
    const data = response?.data;

    return (
        <>
            {isLoading && <span>Loading...</span>}
            {data &&
                (
                    <StyledDisplayVacationStay>
                        <h2>{data?.name}</h2>
                        <h3>{data?.description}</h3>
                        <h4>Host: {data?.host.firstName} {data?.host.lastName}</h4>
                        <StyledMealOptions>
                            <h5>Meal Options</h5>
                            <div className='meal-options'>
                                {data?.mealOptions.map((opt, idx) => (
                                    <div key={idx} className='meal-option'>
                                        <p>Plan: {opt.plan}</p>
                                        <p>Description: {opt.description}</p>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </StyledMealOptions>
                        <div className='verification'>Guest Verification method: {data?.guestVerificationMethod}</div>
                        <StyledRoom>
                            <h5>Rooms</h5>
                            <div className='rooms'>
                                {data?.rooms.map((room, idx) => (
                                    <div key={idx}>
                                        <h6>{room.number}</h6>
                                        <p>Name: {room.roomTypes.name}</p>
                                        <p>Description: {room.roomTypes.description}</p>
                                        <p>Max Guests: {room.roomTypes.maxGuests}</p>
                                        <div>
                                            <p>Bathroom Amenities</p>
                                            <ul>
                                                {room.roomTypes.roomTypeAmenities.map((amenity, idx) => (
                                                    <li key={idx}>{amenity.amenities.description}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </StyledRoom>
                        <div className='languages'>
                            <h4>Languages</h4>
                            <ul>
                                {data?.propertyLanguages.map((lang, idx) => (
                                    <li key={idx}>{lang.language.name}</li>
                                ))}
                            </ul>
                        </div>
                        {/* <div>
                            <h4>Accessibility Features</h4>
                            <ul>
                                {data?.accessbilityFeatures.map((feat, idx) => (
                                    <li key={idx}>
                                        <strong>{feat.features.category}:</strong> {feat.features.feature}
                                    </li>
                                ))}
                            </ul>
                        </div> */}
                        <div className='amenities'>
                            <h5>Amenities</h5>
                            <ul>
                                {data?.propertyAmenities.map((amenity, idx) => (
                                    <li key={idx}>{amenity.amenities.name}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='policies'>
                            <h5>Policies</h5>
                            <ul>
                                {data?.propertyPolicies.map((policy, idx) => (
                                    <li key={idx}>{policy.policies.description}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='fp-images'>
                            <h5>Property Images</h5>
                            <div className='image-container'>
                                {data?.propertyImages.map((image, idx) => (
                                    <img key={idx} src={image.images.url} className='image-box' />
                                ))}
                            </div>
                        </div>
                        <div className='fp-images'>
                            <h5>Food Images</h5>
                            <div className='image-container'>
                                {data?.foodImages.map((image, idx) => (
                                    <img key={idx} src={image.images.url} className='image-box' />
                                ))}
                            </div>
                        </div>
                    </StyledDisplayVacationStay>
                )
            }
        </>
    );
};

export default DisplayVacationStay;
