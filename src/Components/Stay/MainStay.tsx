import React from 'react';
import styled from 'styled-components';
import { Container } from '../Layout/Container';
import { useNavigate } from 'react-router-dom';
import villa1 from '../../images/villa1.png';
import villa2 from '../../images/villa2.png';
import villa3 from '../../images/villa3.png';
import villa4 from '../../images/villa4.png';
import villa5 from '../../images/villa5.png';
import { MainInfo } from './MainInfo';
import { Images } from './Images';
import { AboutAndPrice } from './AboutAndPrice';
import { AmenitiesAndRewievs } from './AmenitiesAndRewievs';
import wifi from '../../images/wifi.svg';
import person from '../../images/person.png';
import { GuestGuidlines } from './GuestGuidlines';
import { Back } from '../UI/Back';

const StyledMain = styled.main`
padding: 32px 0 80px;
background: #fff;
`;

export const MainStay = () => {
  const navigate = useNavigate();
  const stay = {
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
    about: 'Villa Antica is a luxurious residence located in Split, Croatia. Its stylish architecture, open floor plan, and glass foyer make it truly exceptional. The panoramic windows provide ample natural light and breathtaking views of the sea and forest. Four bedrooms with en-suite bathrooms ensure comfort and privacy. The spacious living room with a TV and comfortable sofas creates a cozy atmosphere. The kitchen is fully equipped with everything you need. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ducimus quibusdam eos! Unde nam, sed, ducimus totam commodi omnis cumque excepturi tempora error ipsam odio nesciunt, itaque cum nobis ea. Velit, iste libero aliquid eum sit incidunt mollitia? Voluptatibus nam iure iste sunt doloremque sapiente reiciendis ipsam ratione? Soluta voluptates excepturi laboriosam impedit sapiente incidunt aut illum adipisci, doloribus maxime.Deserunt excepturi eius fuga fugit reiciendis cumque dolor, tenetur nemo nesciunt dolores maiores totam, repellendus incidunt. Fuga cumque mollitia deserunt! Autem doloribus exercitationem aliquam praesentium. Itaque sunt rem iure nam? Cumque, dolorum a. Iste doloribus recusandae tempora, ducimus autem deserunt soluta natus vel laudantium placeat vitae, tempore magnam ex cum enim, voluptas quisquam debitis! Vitae modi ab nisi atque tenetur?',
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
      {
        name: 'Balcony/Terrace',
        img: wifi
      },
      {
        name: 'Airport Shuttle',
        img: wifi
      },
      {
        name: 'Non Smoking Rooms',
        img: wifi
      },
      {
        name: 'Restaurants',
        img: wifi
      },
      {
        name: 'Beachfront',
        img: wifi
      },
      {
        name: 'Fitness Center',
        img: wifi
      },
      {
        name: 'Cannabis',
        img: wifi
      },
      {
        name: 'Eskorting amenities',
        img: wifi
      },
      {
        name: 'Etc',
        img: wifi
      }
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
        name: 'CheckIn',
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
  };

  const goBack = () => {
    navigate(-1);
  };
  return (
    <StyledMain>
      <Container>
        <Back 
          name="Back to listing"
          goBack={goBack}
        />
        <MainInfo 
          stay={stay}
        />
        <Images 
          stay={stay} 
        />
        <AboutAndPrice 
          stay={stay}
        />
        <AmenitiesAndRewievs 
          stay={stay}
        />
        <GuestGuidlines 
          stay={stay}
        />
      </Container>
    </StyledMain>
  );
};
