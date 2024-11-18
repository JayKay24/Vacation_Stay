interface Address {
    country: string;
    county: string;
    town: string;
    street: string;
    city: string;
    latitude: number;
    longitude: number;
}

interface Image {
    images: {
        url: string;
    }
}

interface MealOption {
    plan: string;
    description: string | null;
}

interface Pricing {
    id: string;
    price: number;
    pricingOption: string | null;
    pricingMode: string;
    occupants: number;
    mealOption: MealOption[];
}

interface Room {
    roomTypes: {
        name: string;
        description: string;
        pricings: Pricing[];
        roomTypeImages: Image[];
    }
}

export interface VacationStayFiltered {
    id: string;
    name: string;
    description: string;
    address: Address;
    _count: {
        reviews: number;
    };
    propertyRatings: number | null;
    propertyTags: string[];
    propertyImages: Image[];
    staffImages: Image[];
    foodImages: Image[];
    mealOptions: MealOption[];
    rooms: Room[];
}