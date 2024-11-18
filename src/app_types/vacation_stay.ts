interface AddressFiltered {
    country: string;
    county: string;
    town: string;
    street: string;
    city: string;
    latitude: number;
    longitude: number;
}

interface AddressComplete extends AddressFiltered {
    physicalAddress: string;
    postCode: string;
    apartment: string | null;
}

interface Image {
    images: {
        url: string;
    };
}

interface MealOption {
    plan: string;
    description: string | null;
}

interface Pricing {
    id: number;
    price: number;
    pricingOption: string | null;
    pricingMode: string;
    occupants: number;
    mealOption: MealOption[];
}

interface RoomFiltered {
    roomTypes: {
        name: string;
        description: string;
        pricings: Pricing[];
        roomTypeImages: Image[];
    };
}

interface PropertyAmenity {
    amenities: {
        name: string;
        category: string;
        description: string;
        icon: string;
    };
}

interface BedType {
    bedType: {
        description: string;
        name: string;
    }
}

interface RoomComplete {
    number: string;
    roomTypes: {
        id: number;
        name: string;
        description: string;
        maxGuests: number;
        typeSize: number;
        bathroom: {
            isPrivate: boolean;
            bathroomAmenities: PropertyAmenity[];
        },
        roomTypeImages: Image[];
        roomTypeAmenities: PropertyAmenity[];
        bedTypes: BedType[];
        pricings: Pricing[];
    }
}

interface PropertyLanguage {
    language: {
        name: string;
    };
}

interface AccessibilityFeature {
    features: {
        category: string;
        feature: string;
    };
}

interface PropertyPolicy {
    policies: {
        description: string;
        type: string;
        isMandatory: string;
        penalty: string | null;
        penaltyType: string | null;
    }
}

export interface VacationStayFiltered {
    id: number;
    name: string;
    description: string;
    address: AddressFiltered;
    _count: {
        reviews: number;
    };
    propertyRatings: number | null;
    propertyTags: string[];
    propertyImages: Image[];
    staffImages: Image[];
    foodImages: Image[];
    mealOptions: MealOption[];
    rooms: RoomFiltered[];
}

export interface VacationStayComplete extends VacationStayFiltered {
    address: AddressComplete;
    parking: string | null;
    guestVerificationMethod: string;
    propertyLanguages: PropertyLanguage[];
    accessbilityFeatures: AccessibilityFeature[];
    cancellation: string | null;
    host: {
        firstName: string;
        lastName: string;
    };
    meetingSpaces: [];
    propertyOffers: [];
    propertyAmenities: PropertyAmenity[];
    propertyPolicies: PropertyPolicy[];
    type: string;
    rooms: RoomComplete[],
}

interface APIResponse {
    status: string;
    message: string;
}
export interface APIResponseVacationStayFiltered extends APIResponse {
    data: VacationStayFiltered[];
}

export interface APIResponseVacationStayComplete extends APIResponse {
    data: VacationStayComplete;
}