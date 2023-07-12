/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import styled from 'styled-components';
import { Container } from '../Layout/Container';
import bali from '../../images/Bali.png';
import warshaw from '../../images/Warsaw.png';
import bangkok from '../../images/Bangkok.png';
import berlin from '../../images/Berlin.png';
import manchester from '../../images/Manchester.png';
import dubrovnik from '../../images/Dubrovnik.png';
import rio from '../../images/Rio de Janeiro.png';
import antalya from '../../images/Antalya.png';
import { Inputs } from '../Main/Search/Inputs';
import { Filters } from './Filters';
import { StaysList } from './StaysList';
import { Back } from '../UI/Back';
import { useNavigate } from 'react-router-dom';
import villa1 from '../../images/villa1.png';
import villa2 from '../../images/villa2.png';
import villa3 from '../../images/villa3.png';
import villa4 from '../../images/villa4.png';
import villa5 from '../../images/villa5.png';
import wifi from '../../images/wifi.svg';
import person from '../../images/person.png';
import { useSelector } from 'react-redux';
import { useGetCoefficient } from '../../hooksAndHelpers/useGetCoefficient';
import { StateInterface } from '../../types/reduxTypes';
import { useSortedAndFilteredStays } from '../../hooksAndHelpers/useSortedAndFilteredStays';

const StyledResults = styled.main`
padding: 32px 0 80px;
background: #fff;
`;

const Block = styled.div`
display: flex;
gap: 24px;

@media screen and (max-width: 768px) {
  flex-direction: column;
}
`;

const InputsContainer = styled.div`
margin: 0 0 24px 0;
`;

export const stays = [
  {
    name: 'Villa Antica',
    id: 1,
    city: 'Split',
    country: 'Croatia',
    rating: 5,
    reviews: 87,
    street: 'Ul.Mihovilova Sirina 1',
    propertyType: 'villa',
    images: [
      villa1,
      villa2,
      villa3,
      villa4,
      villa5
    ],
    about: 'Villa Antica is a luxurious residence located in Split, Croatia. Its stylish architecture, open floor plan, and glass foyer make it truly exceptional. The panoramic windows provide ample natural light and breathtaking views of the sea and forest. Four bedrooms with en-suite bathrooms ensure comfort and privacy. The spacious living room with a TV and comfortable sofas creates a cozy atmosphere. The kitchen is fully equipped with everything you need. Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    price: 600,
    amenities: [
      {
        name: 'Free Internet Access',
        img: wifi
      },
      {
        name: 'Free parking',
        img: wifi
      },
      {
        name: 'Swimming pool',
        img: wifi
      },
      {
        name: 'Sleeps Up to 3 adults',
        img: wifi
      },
    ],
    ratings: [
      {
        name: 'Cleanliness',
        rating: 5,
      },
      {
        name: 'Communication',
        rating: 5,
      },
      {
        name: 'Check-In',
        rating: 5,
      },
      {
        name: 'Accuracy',
        rating: 5,
      },
      {
        name: 'Location',
        rating: 5,
      },
      {
        name: 'Value',
        rating: 4.7,
      }
    ],
    reviewsList: [
      {
        author: 'Joe Lawson',
        text: 'Great communication, clean , amazing bathroom, comfortable bed , central, thank. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laudantium labore cum expedita nesciunt voluptate soluta et modi tenetur nihil? Labore nobis dolore et. Aliquam dolorum consequuntur facilis iste omnis!',
        date: 'May 2023',
        img: person,
      },
      {
        author: 'Kira Gibson',
        text: 'Very helpful staff and clean place, great location!',
        date: 'May 2023',
        img: person,
      }
    ],
    guidelines: [
      {
        name: 'House rules',
        description: 'Check-in and Check-out times - Check-in: after 2:00 PM - Check-out: before 11:00 AM Smoking policy - Smoking is prohibited inside the premises - Smoking is allowed in designated areas in the courtyard or on the balcony Pet policy - Prior approval is required for accommodating pets - Additional fees apply for pet-friendly stays',
      },
      {
        name: 'Safety & property',
        description: 'Safety procedures - Keep doors and windows closed when not present - Store valuable items in a secure location - Do not disclose confidential information about your stay Responsibility for property - Guests are fully responsible for any damage or loss of property caused due to negligence or misuse'
      },
      {
        name: 'Cancellation policy',
        description: 'Cancellation terms - Free cancellation up to 48 hours before arrival - 50% refund for cancellations less than 48 hours before arrival Booking flexibility - Changes and modifications to reservations are subject to availability and specified terms'
      }
    ]
  },
  {
    name: 'Modern Loft',
    id: 2,
    city: 'City Center',
    country: 'United States',
    rating: 4.9,
    reviews: 105,
    street: 'Main Street',
    propertyType: 'apartment',
    images: [
      villa1,
      villa2,
      villa3,
      villa4,
      villa5
    ],
    about: 'Modern Loft is a stylish apartment located in the heart of the city center. This contemporary loft offers a luxurious and comfortable living space for an urban getaway. With its modern design, open floor plan, and floor-to-ceiling windows, it provides a bright and airy atmosphere. The apartment features a spacious bedroom, a sleek living room, a fully equipped kitchen, and a private balcony with city views. It\'s the perfect choice for those who want to experience city living at its finest. Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    price: 350,
    amenities: [
      {
        name: 'Balcony with City Views',
        img: wifi
      },
      {
        name: 'Modern Design',
        img: wifi
      },
      {
        name: 'Fully Equipped Kitchen',
        img: wifi
      },
      {
        name: 'Gym',
        img: wifi
      },
      {
        name: 'Free Wi-Fi',
        img: wifi
      },
      {
        name: '24/7 Security',
        img: wifi
      },
      {
        name: 'Ocean view',
        img: wifi
      }
    ],
    ratings: [
      {
        name: 'Cleanliness',
        rating: 4.9,
      },
      {
        name: 'Comfort',
        rating: 4.8,
      },
      {
        name: 'Location',
        rating: 5.0,
      },
      {
        name: 'Facilities',
        rating: 4.8,
      },
      {
        name: 'Value',
        rating: 4.9,
      }
    ],
    reviewsList: [
      {
        author: 'Sophia Johnson',
        text: 'Staying at the Modern Loft was an incredible experience. The apartment is beautifully designed and offers stunning city views from the balcony. The location is perfect, with easy access to all the attractions. I highly recommend this place!',
        date: 'June 2023',
        img: person,
      },
      {
        author: 'Michael Smith',
        text: 'The Modern Loft exceeded my expectations. It was clean, comfortable, and had all the amenities I needed for a pleasant stay. The gym facilities were an added bonus. I would definitely book this apartment again on my next visit!',
        date: 'May 2023',
        img: person,
      }
    ],
    guidelines: [
      {
        name: 'Check-in and Check-out',
        description: 'Check-in: after 3:00 PM\nCheck-out: before 11:00 AM'
      },
      {
        name: 'Smoking Policy',
        description: 'Smoking is prohibited inside the apartment'
      },
      {
        name: 'Pet Policy',
        description: 'Pets are not allowed in the apartment'
      },
      {
        name: 'Cancellation Policy',
        description: 'Free cancellation up to 48 hours before arrival'
      }
    ]
  },
  {
    name: 'Grand Hotel',
    id: 3,
    city: 'Paris',
    country: 'France',
    rating: 4.5,
    reviews: 120,
    street: 'Rue de la Paix',
    propertyType: 'hotel',
    images: [
      villa1,
      villa2,
      villa3,
      villa4,
      villa5
    ],
    about: 'Grand Hotel is a luxurious accommodation located in the heart of Paris, France. This prestigious hotel offers a blend of elegance and comfort, providing a memorable stay for its guests. The spacious rooms and suites are beautifully appointed and feature modern amenities. The hotel boasts exquisite dining options, a fitness center, and a spa for relaxation. With its prime location, guests can easily explore the iconic attractions of Paris. Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    price: 300,
    amenities: [
      {
        name: 'Swimming Pool',
        img: wifi
      },
      {
        name: 'Restaurant',
        img: wifi
      },
      {
        name: 'Fitness Center',
        img: wifi
      },
      {
        name: 'Spa',
        img: wifi
      },
      {
        name: 'Wi-Fi',
        img: wifi
      },
      {
        name: 'Parking',
        img: wifi
      },
      {
        name: 'Concierge Service',
        img: wifi
      },
      {
        name: 'Room Service',
        img: wifi
      }
      // Добавьте дополнительные удобства здесь
    ],
    ratings: [
      {
        name: 'Cleanliness',
        rating: 4.7,
      },
      {
        name: 'Service',
        rating: 4.6,
      },
      {
        name: 'Location',
        rating: 4.8,
      },
      {
        name: 'Facilities',
        rating: 4.5,
      },
      {
        name: 'Value',
        rating: 4.4,
      }
    ],
    reviewsList: [
      {
        author: 'Sophie Martin',
        text: 'We had a wonderful stay at the Grand Hotel. The staff was attentive and friendly, and the rooms were comfortable hotel\'s location is perfect, with easy access to all the major attractions. The breakfast buffet was delicious, with a wide variety of options. Highly recommended!',
        date: 'July 2023',
        img: person,
      },
      {
        author: 'Michael Johnson',
        text: 'The Grand Hotel exceeded our expectations in every way. The service was impeccable, and the rooms were beautifully decorated and well-maintained. The hotel\'s restaurant offers gourmet dining with a stunning view of the city. We thoroughly enjoyed our stay and would love to come back!',
        date: 'June 2023',
        img: person,
      }
    ],
    guidelines: [
      {
        name: 'Check-in and Check-out',
        description: 'Check-in: after 3:00 PM\nCheck-out: before 11:00 AM'
      },
      {
        name: 'Smoking Policy',
        description: 'Smoking is prohibited in all areas of the hotel'
      },
      {
        name: 'Pet Policy',
        description: 'Pets are not allowed in the hotel'
      },
      {
        name: 'Cancellation Policy',
        description: 'Free cancellation up to 48 hours before arrival'
      }
    ]
  },
  {
    name: 'Villa Bella',
    id: 4,
    city: 'Dubrovnik',
    country: 'Croatia',
    rating: 4.8,
    reviews: 92,
    street: 'Ul. Peline 22',
    propertyType: 'villa',
    images: [
      villa1,
      villa2,
      villa3,
      villa4,
      villa5
    ],
    about: 'Villa Bella is a charming residence located in Dubrovnik, Croatia. It offers a peaceful retreat with beautiful views of the surrounding nature. The villa features three cozy bedrooms with comfortable beds. The spacious living room provides a relaxing space with a fireplace and a large window overlooking the garden. The kitchen is fully equipped for cooking delicious meals. Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    price: 800,
    amenities: [
      {
        name: 'Free Internet Access',
        img: wifi
      },
      {
        name: 'Private Parking',
        img: wifi
      },
      {
        name: 'Garden',
        img: wifi
      },
      {
        name: 'Air Conditioning',
        img: wifi
      },
      {
        name: 'Terrace',
        img: wifi
      },
      {
        name: 'BBQ Facilities',
        img: wifi
      },
      {
        name: 'Pet-Friendly',
        img: wifi
      },
      {
        name: 'Beach Access',
        img: wifi
      },
      {
        name: 'Spa',
        img: wifi
      },
      {
        name: 'Fitness center',
        img: wifi
      }
    ],
    ratings: [
      {
        name: 'Cleanliness',
        rating: 4.5,
      },
      {
        name: 'Communication',
        rating: 4.8,
      },
      {
        name: 'Check-In',
        rating: 4.7,
      },
      {
        name: 'Accuracy',
        rating: 4.6,
      },
      {
        name: 'Location',
        rating: 4.9,
      },
      {
        name: 'Value',
        rating: 4.4,
      }
    ],
    reviewsList: [
      {
        author: 'Emma Thompson',
        text: 'Lovely villa with a beautiful garden. The location is perfect for exploring Dubrovnik. Highly recommended!',
        date: 'June 2023',
        img: person,
      },
      {
        author: 'Alex Wilson',
        text: 'We had a wonderful stay at Villa Bella. The rooms were clean and comfortable, and the terrace was a great place to relax. Would love to come back!',
        date: 'May 2023',
        img: person,
      }
    ],
    guidelines: [
      {
        name: 'House Rules',
        description: 'Check-in and Check-out times - Check-in: after 3:00 PM - Check-out: before 11:00 AM Smoking policy - Smoking is not allowed inside the villa - Smoking is permitted in designated outdoor areas Pet policy - Pets are allowed with prior approval - Additional fees may apply',
      },
      {
        name: 'Safety & Security',
        description: 'Safety precautions - Keep doors and windows locked when not present - Use the safe for storing valuables - Report any damages or issues immediately Responsibility for belongings - Guests are responsible for their own belongings - The host is not liable for any lost or stolen items'
      },
      {
        name: 'Cancellation Policy',
        description: 'Cancellation terms - Free cancellation up to 7 days before arrival - 50% refund for cancellations less than 7 days before arrival Changes and modifications - Changes to reservations are subject to availability and host approval - Additional charges may apply'
      }
    ]
  },
  {
    name: 'Seaside Resort',
    id: 5,
    city: 'Miami',
    country: 'United States',
    rating: 4.3,
    reviews: 95,
    street: 'Ocean Drive',
    propertyType: 'hotel',
    images: [
      villa1,
      villa2,
      villa3,
      villa4,
      villa5
    ],
    about: 'Seaside Resort is a luxurious beachfront retreat located in the vibrant city of Miami, United States. This stunning resort offers breathtaking ocean views and a range of amenities for a memorable vacation. The spacious and stylishly designed rooms and suites provide a comfortable and relaxing environment. Guests can enjoy direct access to the pristine sandy beach, as well as the resort\'s swimming pools, spa, and fitness center. With its prime location, the resort is surrounded by trendy restaurants and entertainment options. Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    price: 400,
    amenities: [
      {
        name: 'Beachfront Access',
        img: wifi
      },
      {
        name: 'Swimming Pool',
        img: wifi
      },
      {
        name: 'Spa',
        img: wifi
      },
      {
        name: 'Fitness Center',
        img: wifi
      },
      {
        name: 'Restaurants & Bars',
        img: wifi
      },
      {
        name: 'Wi-Fi',
        img: wifi
      },
      {
        name: 'Concierge Service',
        img: wifi
      },
      {
        name: 'Room Service',
        img: wifi
      }
    ],
    ratings: [
      {
        name: 'Cleanliness',
        rating: 4.4,
      },
      {
        name: 'Service',
        rating: 4.2,
      },
      {
        name: 'Location',
        rating: 4.6,
      },
      {
        name: 'Facilities',
        rating: 4.3,
      },
      {
        name: 'Value',
        rating: 4.1,
      }
    ],
    reviewsList: [
      {
        author: 'Sarah Johnson',
        text: 'Our stay at the Seaside Resort was absolutely fantastic. The beachfront location is unbeatable, and the resort itself is stunning. The rooms were spacious and well-appointed, and the staff was friendly and attentive. We enjoyed the pool area and the spa facilities. Highly recommended for a relaxing getaway!',
        date: 'July 2023',
        img: person,
      },
      {
        author: 'David Thompson',
        text: 'We had a great time at the Seaside Resort. The resort offers a wide range of amenities and activities to keep guests entertained. The beach is beautiful, and the resort\'s restaurants serve delicious food. The rooms were clean and comfortable. We would definitely stay here again!',
        date: 'June 2023',
        img: person,
      }
    ],
    guidelines: [
      {
        name: 'Check-in and Check-out',
        description: 'Check-in: after 3:00 PM\nCheck-out: before 11:00 AM'
      },
      {
        name: 'Smoking Policy',
        description: 'Smoking is prohibited in all areas of the resort'
      },
      {
        name: 'Pet Policy',
        description: 'Pets are not allowed in the resort'
      },
      {
        name: 'Cancellation Policy',
        description: 'Free cancellation up to 72 hours before arrival'
      }
    ]
  },    
  {
    name: 'Villa Splendida',
    id: 6,
    city: 'Hvar',
    country: 'Croatia',
    rating: 4.9,
    reviews: 93,
    street: 'Ul. Sveti Marak 15',
    propertyType: 'villa',
    images: [
      villa1,
      villa2,
      villa3,
      villa4,
      villa5
    ],
    about: 'Villa Splendida is a stunning waterfront property located in the picturesque town of Hvar, Croatia. With its modern design and luxurious amenities, it offers an unforgettable vacation experience. The villa features spacious and elegantly decorated rooms, including five bedrooms with en-suite bathrooms. The open-concept living area offers breathtaking views of the Adriatic Sea. The outdoor terrace with a private pool is perfect for relaxation and enjoying the Mediterranean sun. Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    price: 1200,
    amenities: [
      {
        name: 'Private Pool',
        img: wifi
      },
      {
        name: 'Outdoor Terrace',
        img: wifi
      },
      {
        name: 'Garden',
        img: wifi
      },
      {
        name: 'Barbecue',
        img: wifi
      },
      {
        name: 'Spa',
        img: wifi
      },
      {
        name: 'Fitness Center',
        img: wifi
      },
      {
        name: 'Game Room',
        img: wifi
      },
      {
        name: 'Wi-Fi',
        img: wifi
      },
      {
        name: 'Parking',
        img: wifi
      },
      {
        name: 'Air Conditioning',
        img: wifi
      }
      // Добавьте дополнительные удобства здесь
    ],
    ratings: [
      {
        name: 'Cleanliness',
        rating: 4.9,
      },
      {
        name: 'Communication',
        rating: 4.9,
      },
      {
        name: 'Check-In',
        rating: 4.8,
      },
      {
        name: 'Accuracy',
        rating: 4.9,
      },
      {
        name: 'Location',
        rating: 4.9,
      },
      {
        name: 'Value',
        rating: 4.8,
      }
    ],
    reviewsList: [
      {
        author: 'Sophia Davis',
        text: 'Villa Splendida exceeded all our expectations. The views from the villa are absolutely breathtaking, and the interior design is impeccable. The amenities provided made our stay comfortable and enjoyable. We highly recommend Villa Splendida to anyone visiting Hvar!',
        date: 'June 2023',
        img: person,
      },
      {
        author: 'Michael Johnson',
        text: 'We had a fantastic time at Villa Splendida. The location is perfect, with easy access to the town and beautiful beaches. The villa itself is luxurious and well-maintained. The staff was friendly and attentive. We would love to come back!',
        date: 'June 2023',
        img: person,
      }
    ],
    guidelines: [
      {
        name: 'House Rules',
        description: 'Check-in and Check-out times - Check-in: after 2:00 PM - Check-out: before 11:00 AM Smoking Policy - Smoking is prohibited inside the villa - Smoking is allowed in designated outdoor areas Pet Policy - Pets are not allowed in the villa - Additional fees apply for pet-friendly accommodations',
      },
      {
        name: 'Safety & Security',
        description: 'Safety Measures - Please keep the doors and windows locked when leaving the villa - Store your valuables in the provided safe - Do not disclose any personal or confidential information about your stay Responsibility for Personal Belongings - Guests are fully responsible for their personal belongings and valuables - The villa owner is not liable for any loss or damage'
      },
      {
        name: 'Cancellation Policy',
        description: 'Cancellation Terms - Free cancellation up to 7 days before arrival - 50% refund for cancellations less than 7 days before arrival - No refund for cancellations within 48 hours of arrival Booking Modifications - Changes and modifications to reservations are subject to availability and may incur additional charges'
      }
    ]
  },
  {
    name: 'Cozy Cottage',
    id: 7,
    city: 'Countryside',
    country: 'United Kingdom',
    rating: 4.6,
    reviews: 63,
    street: 'Meadow Lane',
    propertyType: 'house',
    images: [
      villa1,
      villa2,
      villa3,
      villa4,
      villa5
    ],
    about: 'Cozy Cottage is a charming countryside house located in the picturesque landscapes of the United Kingdom. This lovely cottage offers a peaceful retreat away from the hustle and bustle of city life. With its rustic interiors and comfortable furnishings, it provides a homely atmosphere for a relaxing vacation. The cottage features two bedrooms, a cozy living room with a fireplace, and a fully equipped kitchen. The private garden with a patio is the perfect spot to enjoy nature and unwind. Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    price: 250,
    amenities: [
      {
        name: 'Private Garden',
        img: wifi
      },
      {
        name: 'Fireplace',
        img: wifi
      },
      {
        name: 'Fully Equipped Kitchen',
        img: wifi
      },
      {
        name: 'Free Parking',
        img: wifi
      },
      {
        name: 'Wi-Fi',
        img: wifi
      },
      {
        name: 'Pet-Friendly',
        img: wifi
      }
      // Добавьте дополнительные удобства здесь
    ],
    ratings: [
      {
        name: 'Cleanliness',
        rating: 4.7,
      },
      {
        name: 'Comfort',
        rating: 4.6,
      },
      {
        name: 'Location',
        rating: 4.5,
      },
      {
        name: 'Facilities',
        rating: 4.4,
      },
      {
        name: 'Value',
        rating: 4.7,
      }
    ],
    reviewsList: [
      {
        author: 'Emily Brown',
        text: 'Cozy Cottage is a hidden gem in the countryside. The peaceful surroundings and beautiful garden made our stay truly special. The cottage itself is well-maintained and has all the necessary amenities. It was a perfect getaway for our family!',
        date: 'May 2023',
        img: person,
      },
      {
        author: 'Daniel Evans',
        text: 'We had a wonderful time at Cozy Cottage. The fireplace added a cozy touch to the evenings, and the garden was a great place for our kids to play. The location was convenient for exploring the countryside. Highly recommended for anyone seeking a relaxing escape!',
        date: 'April 2023',
        img: person,
      }
    ],
    guidelines: [
      {
        name: 'Check-in and Check-out',
        description: 'Check-in: after 2:00 PM\nCheck-out: before 10:00 AM'
      },
      {
        name: 'Smoking Policy',
        description: 'Smoking is prohibited inside the cottage'
      },
      {
        name: 'Pet Policy',
        description: 'Pets are allowed upon request. Additional fees may apply.'
      },
      {
        name: 'Cancellation Policy',
        description: 'Free cancellation up to 7 days before arrival'
      }
    ]
  },
  {
    name: 'Villa Paradiso',
    id: 8,
    city: 'Santorini',
    country: 'Greece',
    rating: 4.7,
    reviews: 82,
    street: 'Karterados',
    propertyType: 'villa',
    images: [
      villa1,
      villa2,
      villa3,
      villa4,
      villa5
    ],
    about: 'Villa Paradiso is a luxurious retreat situated in the enchanting island of Santorini, Greece. This elegant villa offers breathtaking views of the Aegean Sea and the iconic Santorini sunset. With its spacious and beautifully designed interiors, it provides a serene and indulgent getaway. The villa features four tastefully furnished bedrooms with en-suite bathrooms. The outdoor terrace with a private infinity pool is the perfect spot to relax and enjoy the stunning surroundings. Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    price: 1500,
    amenities: [
      {
        name: 'Private Infinity Pool',
        img: wifi
      },
      {
        name: 'Outdoor Terrace',
        img: wifi
      },
      {
        name: 'Garden',
        img: wifi
      },
      {
        name: 'Barbecue',
        img: wifi
      },
      {
        name: 'Spa',
        img: wifi
      },
      {
        name: 'Fitness Center',
        img: wifi
      },
      {
        name: 'Wi-Fi',
        img: wifi
      },
      {
        name: 'Parking',
        img: wifi
      },
      {
        name: 'Air Conditioning',
        img: wifi
      }
      // Добавьте дополнительные удобства здесь
    ],
    ratings: [
      {
        name: 'Cleanliness',
        rating: 4.8,
      },
      {
        name: 'Communication',
        rating: 4.7,
      },
      {
        name: 'Check-In',
        rating: 4.6,
      },
      {
        name: 'Accuracy',
        rating: 4.8,
      },
      {
        name: 'Location',
        rating: 4.9,
      },
      {
        name: 'Value',
        rating: 4.7,
      }
    ],
    reviewsList: [
      {
        author: 'Emma Wilson',
        text: 'Villa Paradiso is truly a paradise on earth. The views are absolutely breathtaking, and the villa itself is a masterpiece. The attention to detail and the level of comfort provided exceeded our expectations. The staff was attentive and made our stay unforgettable. We highly recommend Villa Paradiso to anyone visiting Santorini!',
        date: 'June 2023',
        img: person,
      },
      {
        author: 'James Thompson',
        text: 'We had an incredible time at Villa Paradiso. The location is perfect, close to all the attractions and with easy access to beautiful beaches. The villa is luxurious and offers everything one could ask for. The infinity pool and the sunset views are simply magical. We will definitely be coming back!',
        date: 'June 2023',
        img: person,
      }
    ],
    guidelines: [
      {
        name: 'House Rules',
        description: 'Check-in and Check-out times - Check-in: after 3:00 PM - Check-out: before 11:00 AM Smoking Policy - Smoking is prohibited inside the villa - Smoking is allowed in designated outdoor areas Pet Policy - Pets are not allowed in the villa - Additional fees apply for pet-friendly accommodations',
      },
      {
        name: 'Safety & Security',
        description: 'Safety Measures - Please keep the doors and windows locked when leaving the villa - Store your valuables in the provided safe - Do not disclose any personal or confidential information about your stay Responsibility for Personal Belongings - Guests are fully responsible for their personal belongings and valuables - The villa owner is not liable for any loss or damage'
      },
      {
        name: 'Cancellation Policy',
        description: 'Cancellation Terms - Free cancellation up to 14 days before arrival - 50% refund for cancellations less than 14 days before arrival - No refund for cancellations within 48 hours of arrival Booking Modifications - Changes and modifications to reservations are subject to availability and may incur additional charges'
      }
    ]
  }
];

export const ResultsMain = () => {
  const places = [
    {
      img: antalya,
      country: 'Turkey',
      city: 'Antalya',
      rewievs: 184,
      rating: 5,
    },
    {
      img: bali,
      country: 'Indonesia',
      city: 'Bali',
      rewievs: 205,
      rating: 5,
    },
    {
      img: bangkok,
      country: 'Thailand',
      city: 'Bangkok',
      rewievs: 345,
      rating: 5,
    },
    {
      img: manchester,
      country: 'United Kingdom',
      city: 'Manchester',
      rewievs: 124,
      rating: 4,
    },
    {
      img: warshaw,
      country: 'Poland',
      city: 'Warsaw',
      rewievs: 65,
      rating: 5,
    },
    {
      img: berlin,
      country: 'Germany',
      city: 'Berlin',
      rewievs: 104,
      rating: 4,
    },
    {
      img: dubrovnik,
      country: 'Croatia',
      city: 'Dubrovnik',
      rewievs: 118,
      rating: 5,
    },
    {
      img: rio,
      country: 'Brazil',
      city: 'Rio de Janeiro',
      rewievs: 143,
      rating: 5,
    },
    {
      img: rio,
      country: 'Croatia',
      city: 'Split',
      rewievs: 143,
      rating: 5,
    },
  ];

  const filters = useSelector((state: StateInterface) => state.filters);
  const coefficient = useGetCoefficient();
  const sortBy = useSelector((state: StateInterface) => state.sort);
  const navigate = useNavigate();
  console.log(filters);

  const goBack = () => {
    navigate(-1);
  };

  const sortedAndFilteredStays = useSortedAndFilteredStays(stays, filters, sortBy, coefficient);

  return (
    <StyledResults>
      <Container>
        {/* <ResultHeader /> */}
        <Back 
          name="Back to Home"
          goBack={goBack}
        />
        <InputsContainer>
          <Inputs 
            places={places}
          />
        </InputsContainer>
        <Block>
          <Filters 
            stays={stays}
          />
          <StaysList 
            stays={sortedAndFilteredStays}
          />
        </Block>
      </Container>
    </StyledResults>
  );
};
