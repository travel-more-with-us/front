export interface Place {
  img: string,
  city: string,
  country: string,
  rating: number,
  rewievs: number,
}

export interface StayInterface {
  name: string;
  id: number;
  city: string;
  country: string;
  rating: number;
  reviews: number;
  street: string;
  images: string[];
  about: string;
  price: number;
  amenities: AmenityInterface[];
  ratings: RatingInterface[];
  reviewsList: ReviewListItemInterface[];
  guidelines: Guideline[];
  [key: string]: any;
}

export interface AmenityInterface {
  name: string;
  img: string;
}

export interface RatingInterface {
  name: string;
  rating: number;
}

export interface ReviewListItemInterface {
  author: string;
  text: string;
  date: string;
  img: string;
}

export interface Guideline {
  name: string;
  description: string;
}

export interface SearchOption {
  city: string;
  country: string;
}

export interface FilterPriceOptionInterface {
  name: string;
  min: number;
  max: number;
}

export interface FilterOptionInterface {
  name: string;
  value: string | number;
}

