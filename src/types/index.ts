export interface Place {
  img: string,
  city: string,
  country: string,
  rating: number,
  rewievs: number,
}

export interface VillaInterface {
  name: string;
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

