import React from 'react';
import styled from 'styled-components';
import location from '../../../images/location.svg';
import locationGreen from '../../../images/location-green.svg';

const StyledInput = styled.input`
  background: #FFFFFF;
  border: 2px solid #D9DBE9;
  border-radius: 8px;
  position: relative;
  padding: 20px 0 20px 64px;
  position: relative;
  height: 64px;
  box-sizing: border-box;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background-image: url(${location});
    background-repeat: no-repeat;
    background-position: center;
  }

  &:focused-visible {
    background-image: url(${locationGreen});
    background-repeat: no-repeat;
    border: 2px solid #B4FDD3;
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
  border: 1px solid #d9dbe9;
  border-top: none;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Block = styled.div`
width: 364px;
`;

export const SearchInput = () => {
  const [searchInput, setSearchInput] = React.useState('');
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const [dropdownVisible, setDropdownVisible] = React.useState(true);

  const handleItemClick = (option: string) => {
    setSearchInput(option);
    setDropdownVisible(false);
  };

  function handleSearch(e: any) {
    setSearchInput(e);
    setDropdownVisible(true);
  }

  const searchedOptions = React.useMemo(() => {
    if (searchInput === '') {
      return [];
    }

    const optionsFiltered = options.filter(
      option => option.toLowerCase().includes(searchInput.toLowerCase()),
    );

    if (searchInput !== '' && optionsFiltered.length === 0) {
      return ['Places not found'];
    }

    return options.filter(option => option.toLowerCase().includes(searchInput.toLowerCase()));
  }, [searchInput]);

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
        placeholder="Select an option"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        value={searchInput}
      />
      {dropdownVisible && (
        <DropdownList className="dropdown">
          {searchedOptions.map((option) => (
            <DropdownItem key={option} onClick={() => handleItemClick(option)}>
              {option}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </Block>
  );
};
