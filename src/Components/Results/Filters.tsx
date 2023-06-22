import React from 'react';
import styled from 'styled-components';
import { VillaLink } from '../UI/VillaLink';
import { Filter } from './Filter';
import { SeparatorHorizontal } from '../UI/SeparatorHorizontal';

const StyledFilters = styled.div`
  max-width: 288px;
  width: calc((100% - 24px) / 4);
  margin: 32px 0 0 0;
  padding: 18px 0 0 0;
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

export const Filters = () => {
  const popularFiltersOptions = [
    'Hotels',
    'Breakfast included',
    '5 stars',
    'Hostels',
    'Beachfront',
    'Twin beds',
    'Bed and breakfasts',
    'Split Old Town',
  ];

  const propertyTypes = [
    'Hotels',
    'Apartment',
    'Villa',
    'House',
    'Bed & breakfast',
  ];

  const propertyRating = [
    '2 stars',
    '3 stars',
    '4 stars',
    '5 stars',
    'Unrated',
  ];

  const distanceFromCenter = [
    'less than 1km',
    'less than 3km',
    'less than 5km'
  ];

  const mealPlans = [
    'Breakfast included',
    'Lunch included',
    'Dinner included',
    'All inclusive',
  ];

  const amenities = [
    'Airport shuttle included',
    'Pool',
    'Ocean view',
    'Parking',
    'Air conditioned',
    'Free parking',
    'Swimming pool',
    'Sleeps Up to 3 adults',
    'Balcony/Terrace',
  ];

  const accesibility = [
    'In-room accessibility',
    'Roll-in shower',
    'Service animals',
    'Accessible bathroom',
    'Wi-Fi',
    'Cannabis in bedroom',
    'Girls for relaxing',
  ];

  return (
    <StyledFilters>
      <HeaderBlock>
        <H3>
          Filters
        </H3>
        <VillaLink click={() => {}}>
          Reset all
        </VillaLink>
      </HeaderBlock>
      <SeparatorHorizontal />
      <div>
        <Filter 
          name="Popular filters"
          options={popularFiltersOptions}
        />
        <SeparatorHorizontal />
        <Filter 
          name="Property type"
          options={propertyTypes}
        />
        <SeparatorHorizontal />
        <Filter 
          name="Property rating"
          options={propertyRating}
        />
        <SeparatorHorizontal />
        <Filter 
          name="Distance from center of Split"
          options={distanceFromCenter}
        />
        <SeparatorHorizontal />
        <Filter 
          name="Meal plans available"
          options={mealPlans}
        />
        <SeparatorHorizontal />
        <Filter 
          name="Amenities"
          options={amenities}
          seeMore={true}
        />
        <SeparatorHorizontal />
        <Filter 
          name="Accessibility"
          options={accesibility}
          seeMore={true}
        />
        <SeparatorHorizontal />
      </div>
    </StyledFilters>
  );
};