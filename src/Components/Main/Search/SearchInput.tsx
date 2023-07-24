import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import location from '../../../images/location.svg';
import locationGreen from '../../../images/location-green.svg';
import { Place } from '../../../types';
import { useSearch } from '../../../hooksAndHelpers/useSearch';
import axios from 'axios';

const Block = styled.div`
max-width: 364px;
width: 30%;

@media screen and (max-width: 768px) {
  width: 100%;
}
`;

interface InputProps {
  iconIsGreen: string;
}

const StyledInput = styled.input<InputProps>`
  background: #FFFFFF url(${props => props.iconIsGreen ? locationGreen : location}) no-repeat left 10px center;
  border: 2px solid ${props => props.theme.disabledColor};
  border-radius: 8px;
  position: relative;
  padding: 20px 0 20px 64px;
  height: 64px;
  box-sizing: border-box;
  width: 100%;

  &:placeholder {
    color: ${props => props.theme.placeholderColor};
  }

  &:focus-visible {
    background: #FFFFFF url(${locationGreen}) no-repeat left 10px center;
    outline: 3px solid ${props => props.theme.primaryColor};
    outline-offset: -2px;
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 364px;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #ffffff;
  border: 1px solid ${props => props.theme.disabledColor};
  border-top: none;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 2;

  @media screen and (max-width: 768px) {
    top: 0;
    transform: translateY(64px);
    width: 100%;
    max-width: 364px;
  }
`;

const DropdownItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const City = styled.p`
margin: 0 0 2px 0;
color: #000;
font-weight: 400;
font-size: 16px;
`;

const Country = styled.p`
margin: 0;
font-weight: 400;
font-size: 16px;
line-height: 100%;
color: ${props => props.theme.placeholderColor};
`;

interface Props {
  places: Place[];
}

export const SearchInput: React.FC <Props> = ({ places }) => {
  const [dropdownVisible, setDropdownVisible] = React.useState(true);
  const { searchedOptions, iconIsGreen, handleItemClick, handleSearch, searchInput } = useSearch(places, setDropdownVisible);
  const optionsToShowInDropdown = 5;

  const handleClickOutside = (e: any) => {
    if (!e.target.closest('.dropdown')) {
      setDropdownVisible(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Block>
      <StyledInput
        placeholder="Going to"
        iconIsGreen={iconIsGreen === true ? 'true' : ''}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handleSearch(e.target.value);
        }}
        value={searchInput}
      />
      {dropdownVisible && (
        <DropdownList className="dropdown">
          {searchedOptions.slice(0, optionsToShowInDropdown).map((option: any) => (
            <DropdownItem key={option.name} onClick={() => handleItemClick(option)}>
              <City>
                {option.city}
              </City>
              <Country>
                {option.country}
              </Country>
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </Block>
  );
};
