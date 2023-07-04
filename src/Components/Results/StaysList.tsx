import React from 'react';
import styled from 'styled-components';
import villa1 from '../../images/villa1.png';
import villa2 from '../../images/villa2.png';
import villa3 from '../../images/villa3.png';
import villa4 from '../../images/villa4.png';
import villa5 from '../../images/villa5.png';
import wifi from '../../images/wifi.svg';
import person from '../../images/person.png';
import { ListHeader } from './ListHeader';
import { Stay } from './Stay';

const List = styled.div`
padding: 10px;
width: calc((100% - 24px) - ((100% - 24px) / 4));

@media screen and (max-width: 768px) {
  width: 100%;
  max-width: unset;
}
`;

const Stays = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
`;

export const StaysList = () => {
  const stays = [
    {
      name: 'Villa Antica',
      city: 'Split',
      country: 'Croatia',
      rating: 5,
      reviews: 87,
      street: 'Ul.Mihovilova Sirina 1',
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
        // Добавьте дополнительные удобства здесь
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
        // Добавьте дополнительные отзывы здесь
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
        // Добавьте дополнительные правила здесь
      ]
    },
    {
      name: 'Villa Bella',
      city: 'Dubrovnik',
      country: 'Croatia',
      rating: 4.8,
      reviews: 92,
      street: 'Ul. Peline 22',
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
          name: 'Fitness Center',
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
      name: 'Villa Splendida',
      city: 'Hvar',
      country: 'Croatia',
      rating: 4.9,
      reviews: 93,
      street: 'Ul. Sveti Marak 15',
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
      name: 'Villa Paradiso',
      city: 'Santorini',
      country: 'Greece',
      rating: 4.7,
      reviews: 82,
      street: 'Karterados',
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

  return (
    <List>
      <ListHeader />
      <Stays>
        {stays.map(stay => (
          <Stay 
            stay={stay}
            key={stay.city}
          />
        ))}
      </Stays>
    </List>
  );
};
