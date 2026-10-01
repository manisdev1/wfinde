export type VehicleType = 'Camper' | 'Capuchina' | 'Integral' | 'Perfilada';

export interface Vehicle {
  id: number | string;
  title: string;
  type: VehicleType;
  typeId: number;
  location: string;
  zone: string;
  seats: number;
  beds: number;
  dailyPrice: number;
  images: string[];
  description: string;
  features?: string[];
  conditions?: {
    minAge?: number;
    licenseYears?: number;
    deposit?: number;
    insuranceExcess?: number;
    mileage?: string;
    roadAssistance?: boolean;
  };
  equipment?: {
    interior?: string[];
    exterior?: string[];
    included?: string[];
  };
}

export interface Experience {
  id: string;
  title: string;
  slug: string;
  location: string;
  dates: string;
  maxTravelers: number;
  durationDays: number;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage?: number;
  isSoldOut: boolean;
  images: string[];
  itineraryHtml?: string;
  includesHtml?: string;
  policiesHtml?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  coverImage: string;
  summary: string;
  readTime?: string;
  contentHtml?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  relativeTime?: string;
}

export interface LocationItem {
  name: string;
  slug: string;
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}
