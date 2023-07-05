import React from 'react';
import styled from 'styled-components';
import { StayLink } from '../UI/StayLink';
import { Filter } from './Filter';
import { SeparatorHorizontal } from '../UI/SeparatorHorizontal';
import { FilterWithRange } from './FilterWithRange';
import { StayInterface } from '../../types';

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
  // const popularFiltersOptions = [
  //   'Hotels',
  //   'Breakfast included',
  //   '5 stars',
  //   'Hostels',
  //   'Beachfront',
  //   'Twin beds',
  //   'Bed and breakfasts',
  //   'Split Old Town',
  // ];

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

  // const distanceFromCenter = [
  //   'less than 1km',
  //   'less than 3km',
  //   'less than 5km'
  // ];

  // const mealPlans = [
  //   'Breakfast included',
  //   'Lunch included',
  //   'Dinner included',
  //   'All inclusive',
  // ];

  // const amenities = [
  //   'Airport shuttle included',
  //   'Pool',
  //   'Ocean view',
  //   'Parking',
  //   'Air conditioned',
  //   'Free parking',
  //   'Swimming pool',
  //   'Sleeps Up to 3 adults',
  //   'Balcony/Terrace',
  // ];

  // const accesibility = [
  //   'In-room accessibility',
  //   'Roll-in shower',
  //   'Service animals',
  //   'Accessible bathroom',
  //   'Wi-Fi',
  //   'Cannabis in bedroom',
  //   'Girls for relaxing',
  // ];

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

  return (
    <StyledFilters>
      <HeaderBlock>
        <H3>
          Filters
        </H3>
        <StayLink click={() => {}}>
          Reset all
        </StayLink>
      </HeaderBlock>
      <SeparatorHorizontal />
      <div>
        <FilterWithRange 
          name="Your budget"
          options={prices}
          stays={stays}
        />
        {/* <Filter 
          name="Popular filters"
          options={popularFiltersOptions}
        /> */}
        <SeparatorHorizontal />
        <Filter 
          name="Property type"
          options={propertyTypes}
          stays={stays}
          keyName="propertyType"
        />
        <SeparatorHorizontal />
        <Filter 
          name="Property rating"
          options={propertyRating}
          stays={stays}
          keyName="rating"
        />
        <SeparatorHorizontal />
        {/* <Filter 
          name="Distance from center"
          options={distanceFromCenter}
        /> */}
        <SeparatorHorizontal />
        {/* <Filter 
          name="Meal plans available"
          options={mealPlans}
        /> */}
        <SeparatorHorizontal />
        {/* <Filter 
          name="Amenities"
          options={amenities}
          seeMore={true}
        /> */}
        <SeparatorHorizontal />
        {/* <Filter 
          name="Accessibility"
          options={accesibility}
          seeMore={true}
        /> */}
        <SeparatorHorizontal />
      </div>
    </StyledFilters>
  );
};