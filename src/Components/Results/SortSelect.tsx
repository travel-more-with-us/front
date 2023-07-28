import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { updateSort } from '../../store/actions';
import change from '../../images/change.svg';

const DropdownContainer = styled.div`
  position: relative;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  display: flex;
  align-items: center;
  width: 100%;
  background: #fff;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  border: 2px solid ${props => props.theme.primaryColor};
  font-family: Nunito;

  &:hover {
    border: 2px solid ${props => props.theme.focusedColor};
    background: ${props => props.theme.hoverColor};
  }
`;

const DropdownButton = styled.button<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  color: ${props => props.theme.txtColor};
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  font-family: Nunito;
  padding: 0px 40px 0px 5px;
  width: 160px;
  height: 75px;

  &:before {
    position: absolute;
    content: '';
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    background-image: url(${change});
    background-repeat: no-repeat;
    background-position: center;
    width: 24px;
    height: 24px;
    background-size: contain;
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 184px; 
  max-height: 250px;
  padding: 0;
  margin-top: 14px;
  list-style-type: none;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.disabledColor};
  background: #FCFCFC;

  @media screen and (max-width: 768px) {
    left: -24px;
  }
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

interface Props {
  options: OptionSelect[];
  defaultField: string;
  arrow: boolean;
}

interface OptionSelect {
  icon?: string;
  label: string;
}

export const SortSelect: React.FC<Props> = ({ options, defaultField, arrow }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const dispatch = useDispatch();


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: OptionSelect) => {
    setSelectedOption(option.label);
    dispatch(updateSort(option.label));
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
      <DropdownButton onClick={toggleDropdown} arrow={arrow}>
        {!selectedOption ? defaultField : selectedOption}
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          {options.map((option: OptionSelect) => (
            <DropdownListItem 
              key={option.label} 
              onClick={() => handleOptionSelect(option)}
            >
              <OptionLabel>
                {option.label}
              </OptionLabel>
            </DropdownListItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};