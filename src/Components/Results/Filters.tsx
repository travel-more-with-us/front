import React from 'react';
import styled from 'styled-components';
import { StayLink } from '../UI/StayLink';
import { Filter } from './Filter';
import { SeparatorHorizontal } from '../UI/SeparatorHorizontal';
import { FilterWithRange } from './FilterWithRange';
import { StayInterface } from '../../types';
import { useDispatch } from 'react-redux';
import { updateFilters } from '../../store/actions';
import { useGetCoefficient } from '../../hooksAndHelpers/useGetCoefficient';

const StyledFilters = styled.div`
  max-width: 288px;
  width: calc((100% - 24px) / 4);
  margin: 32px 0 0 0;
  padding: 18px 0 0 0;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: unset;
  }
`;

const HeaderBlock = styled.div`
display: flex;
justify-content: space-between;
margin: 0 0 18px 0;
`;

const H3 = styled.h3`
margin: 0;
font-size: 24px;
font-weight: 600;
`;

interface Props {
  stays: StayInterface[];
}

export const Filters: React.FC <Props> = ({ stays }) => {
  const propertyTypes = [
    {
      name: 'Hotels',
      value: 'hotel'
    },
    {
      name: 'Apartment',
      value: 'apartment'
    },
    {
      name: 'Villa',
      value: 'villa'
    },
    {
      name: 'House',
      value: 'house'
    }
  ];

  const propertyRating = [
    {
      name: '2 stars',
      value: 2,
    },
    {
      name: '3 stars',
      value: 3,
    },
    {
      name: '4 stars',
      value: 4
    },
    {
      name: '5 stars',
      value: 5
    },
    {
      name: 'Unrated',
      value: 0
    }
  ];

  const amenities = [
    {
      name: 'Swimming pool',
      value: 4
    },
    {
      name: 'Sleeps up to 3 adults',
      value: 8
    },
    {
      name: 'Free Internet Access',
      value: 2
    },
    {
      name: 'Free Parking',
      value: 3
    },
    {
      name: 'Fitness',
      value: 5
    },
    {
      name: 'Pets allowed',
      value: 7
    },
    {
      name: 'Restaurants',
      value: 6
    },
    {
      name: 'Balcony/Terrace',
      value: 9
    },
    {
      name: 'No smoking rooms',
      value: 10
    },
    {
      name: 'Beachfront',
      value: 11
    }
  ];

  const prices = [
    {
      name: '€ 0 - € 100',
      min: 0,
      max: 100,
    },
    {
      name: '€ 100 - € 250',
      min: 100,
      max: 250,
    },
    {
      name: '€ 250 - € 500',
      min: 250,
      max: 500,
    },
    {
      name: '€ 500 - € 1000',
      min: 500,
      max: 1000,
    },
    {
      name: '€ 1000+',
      min: 1000,
      max: 1000000,
    },
  ];
  const dispatch = useDispatch();
  const coefficient = useGetCoefficient();

  const handleResetFilters = () => {
    const staysSortedByPrice = stays.sort((a, b) => a.price - b.price);
    const defaultFilters = {
      priceRange: {
        min: 0,
        max: staysSortedByPrice[staysSortedByPrice.length - 1].price * coefficient || 2000
      },
      amenities: [],
      priceCheckboxFilters: [],
      propertyType: [],
      rating: []
    };
  
    dispatch(updateFilters(defaultFilters));
    setResetFilters(true);
  };

  const [resetFilters, setResetFilters] = React.useState(false);

  const handleResetComplete = () => {
    setResetFilters(false);
  };

  return (
    <StyledFilters>
      <HeaderBlock>
        <H3>
          Filters
        </H3>
        <StayLink click={handleResetFilters}>
          Reset all
        </StayLink>
      </HeaderBlock>
      <SeparatorHorizontal />
      <div>
        <FilterWithRange 
          name="Your budget"
          options={prices}
          stays={stays}
          resetFilters={resetFilters} 
          onResetComplete={handleResetComplete}
        />
        <SeparatorHorizontal />
        <Filter 
          name="Property type"
          options={propertyTypes}
          stays={stays}
          keyName="propertyType"
          resetFilters={resetFilters} 
          onResetComplete={handleResetComplete}
        />
        <SeparatorHorizontal />
        <Filter 
          name="Property rating"
          options={propertyRating}
          stays={stays}
          keyName="rating"
          resetFilters={resetFilters} 
          onResetComplete={handleResetComplete}
        />
        <SeparatorHorizontal />
        <Filter 
          name="Amenities"
          options={amenities}
          seeMore={true}
          stays={stays}
          keyName="amenities"
          resetFilters={resetFilters} 
          onResetComplete={handleResetComplete}
        />
        <SeparatorHorizontal />
      </div>
    </StyledFilters>
  );
};