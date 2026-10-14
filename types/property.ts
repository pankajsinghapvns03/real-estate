export type PropertyCategory =
  | "Buy"
  | "Rent"
  | "New Launch"
  | "Commercial"
  | "Plots/Land"
  | "Projects";

export type PropertyType =
  | "Luxury Villa"
  | "Sky Penthouse"
  | "Designer Apartment"
  | "Golf Estate"
  | "Beachfront Mansion"
  | "Heritage Bungalow";

export type PossessionStatus =
  | "Ready to Move"
  | "Under Construction"
  | "Possession within 6 Months"
  | "New Launch";

export type FurnishingStatus = "Furnished" | "Semi-Furnished" | "Bare Shell";

export interface PropertyAgent {
  name: string;
  role: string;
  phone: string;
  email: string;
  avatar: string;
  rating: number;
  reviewsCount: number;
  experienceYears: number;
  reraLicense: string;
}

export interface PropertySpecs {
  facing: string;
  floor: string;
  totalFloors: number;
  parking: string;
  balconies: number;
  maintenancePerMonth: string;
  constructionYear: number;
}

export interface PropertyLocation {
  city: string;
  locality: string;
  address: string;
  state: string;
  pincode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  price: number; // Raw numeric value for sorting and filtering
  formattedPrice: string; // e.g. "₹8.75 Cr" or "$2,450,000"
  pricePerSqFt: number;
  formattedPricePerSqFt: string;
  location: PropertyLocation;
  beds: number;
  baths: number;
  areaSqFt: number;
  type: PropertyType;
  category: PropertyCategory;
  possessionStatus: PossessionStatus;
  furnishing: FurnishingStatus;
  reraId: string;
  isReraVerified: boolean;
  isFeatured: boolean;
  isTrending: boolean;
  isNewListing: boolean;
  images: string[];
  floorPlanUrl: string;
  hasVirtualTour3D: boolean;
  amenities: string[];
  specs: PropertySpecs;
  agent: PropertyAgent;
  createdAt: string;
}

export interface PropertyFilterState {
  searchQuery: string;
  city: string;
  locality: string;
  category: PropertyCategory | "All";
  propertyType: PropertyType | "All";
  minPrice: number;
  maxPrice: number;
  beds: number | "any";
  furnishing: FurnishingStatus | "All";
  possession: PossessionStatus | "All";
  sortBy: "relevance" | "price-asc" | "price-desc" | "newest" | "area-desc";
}

export interface LocationHub {
  slug: string;
  city: string;
  state: string;
  tagline: string;
  image: string;
  propertyCount: number;
  avgPricePerSqFt: string;
  yoyAppreciation: string;
  topLocalities: string[];
  description: string;
}
