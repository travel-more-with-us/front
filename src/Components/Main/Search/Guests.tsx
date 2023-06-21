/* eslint-disable no-console */
import React, { useState } from 'react';
import styled from 'styled-components';

const Block = styled.div`
width: 184px;
position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background: #FFFFFF;
  border: 2px solid #D9DBE9;
  border-radius: 8px;
  padding: 20px 0 20px 64px;
  height: 64px;
  box-sizing: border-box;
  position: relative;

  &::placeholder {
    color: ${props => props.theme.placeholderColor};
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 273px;
  max-height: 200px;
  background: #FFFFFF;
  border-radius: 8px;
  padding: 26px 24px;
  box-sizing: border-box;
  border: 2px solid #D9DBE9;
`;

const Option = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const Counter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 32px;
  height: 32px;
  font-size: 16px;
  cursor: pointer;
  background: #FFFFFF;
  border: 2px solid ${props => props.theme.primaryColor};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.txtColor};
`;

const Buttons = styled.div`
display: flex;
gap: 5px;
`;

const Value = styled.span`
  width: 20px;
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${props => props.theme.txtColor};
`;

export const Guests = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const blockRef = React.useRef<any>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleIncrement = (field: any) => {
    if (field === 'adults') {
      setAdults(adults + 1);
    } else if (field === 'children') {
      setChildren(children + 1);
    } else if (field === 'rooms') {
      setRooms(rooms + 1);
    }
  };

  const handleDecrement = (field: any) => {
    if (field === 'adults' && adults > 1) {
      setAdults(adults - 1);
    } else if (field === 'children' && children > 0) {
      setChildren(children - 1);
    } else if (field === 'rooms' && rooms > 1) {
      setRooms(rooms - 1);
    }
  };

  const handleClickOutside = (e: any) => {
    if (blockRef.current) {
      if (!blockRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    } else {
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
    <Block ref={blockRef}>
      <Input
        type="text"
        value={`${adults} Adults`}
        onClick={toggleDropdown}
      />
      {isOpen && (
        <Dropdown>
          <Option>
            <Counter>
              <span>Adults</span>
              <Buttons>
                <Button onClick={() => handleDecrement('adults')}>-</Button>
                <Value>{adults}</Value>
                <Button onClick={() => handleIncrement('adults')}>+</Button>
              </Buttons>
            </Counter>
          </Option>
          <Option>
            <Counter>
              <span>Children</span>
              <Buttons>
                <Button onClick={() => handleDecrement('children')}>-</Button>
                <Value>{children}</Value>
                <Button onClick={() => handleIncrement('children')}>+</Button>
              </Buttons>
            </Counter>
          </Option>
          <Option>
            <Counter>
              <span>Rooms</span>
              <Buttons>
                <Button onClick={() => handleDecrement('rooms')}>-</Button>
                <Value>{rooms}</Value>
                <Button onClick={() => handleIncrement('rooms')}>+</Button>
              </Buttons>
            </Counter>
          </Option>
        </Dropdown>
      )}
    </Block>
  );
};
