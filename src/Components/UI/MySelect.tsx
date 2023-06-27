import React, { useState } from 'react';
import styled from 'styled-components';
import down from '../../images/down.svg';

const DropdownContainer = styled.div`
  position: relative;
  width: 184px;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  display: flex;
  align-items: center;

  &:before {
    position: absolute;
    content: '';
    top: 0;
    right: 10px;
    background-image: url(${down});
    width: 24px;
    height: 24px;
  }
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: none;
  background-color: transparent;
  color: #000;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 250px;
  padding: 0;
  margin-top: 14px;
  list-style-type: none;
  border-radius: 8px;
  border: 1px solid #D9DBE9;
  background: #FCFCFC;
`;

const DropdownListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: #F4F5FD;
  }
`;

const OptionLabel = styled.span`
  margin-left: 8px;
`;

const OptionIcon = styled.img`
  
`;

export const MySelect: React.FC<any> = ({ options, defaultField, arrow }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option.label.split(' ')[0]);
    setIsOpen(false);
  };

  const handleClickOutside = (e: any) => {
    if (!e.target.closest('.dropdown')) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer className='dropdown'>
      <DropdownButton onClick={toggleDropdown}>
        {!selectedOption ? defaultField : selectedOption}
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {options.map((option: any) => (
            <DropdownListItem key={option.label} onClick={() => handleOptionSelect(option)}>
              {option.icon && <OptionIcon src={option.icon} /> }
              <OptionLabel>{option.label}</OptionLabel>
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

