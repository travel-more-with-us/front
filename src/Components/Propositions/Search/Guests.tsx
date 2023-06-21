/* eslint-disable no-console */
import React, { useState } from 'react';
import styled from 'styled-components';

const Block = styled.div`
width: 364px;
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
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow: auto;
  background-color: #fff;
  border: 1px solid #ccc;
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
  align-items: center;
`;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
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
        value={`Adults: ${adults}, Children: ${children}, Rooms: ${rooms}`}
        onClick={toggleDropdown}
      />
      {isOpen && (
        <Dropdown>
          <Option>
            <Counter>
              <span>Adults</span>
              <Button onClick={() => handleDecrement('adults')}>-</Button>
              <span>{adults}</span>
              <Button onClick={() => handleIncrement('adults')}>+</Button>
            </Counter>
          </Option>
          <Option>
            <Counter>
              <span>Children</span>
              <Button onClick={() => handleDecrement('children')}>-</Button>
              <span>{children}</span>
              <Button onClick={() => handleIncrement('children')}>+</Button>
            </Counter>
          </Option>
          <Option>
            <Counter>
              <span>Rooms</span>
              <Button onClick={() => handleDecrement('rooms')}>-</Button>
              <span>{rooms}</span>
              <Button onClick={() => handleIncrement('rooms')}>+</Button>
            </Counter>
          </Option>
        </Dropdown>
      )}
    </Block>
  );
};
