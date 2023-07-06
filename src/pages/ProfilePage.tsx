import React from 'react';
import { LayoutContainer } from '../Components/Layout/LayoutContainer';
import { Profile } from '../Components/Profile/Profile';
import { useSelector } from 'react-redux';
import { StateInterface } from '../types/reduxTypes';
import { useNavigate } from 'react-router-dom';

export const ProfilePage = () => {
  const isAuthenticated = useSelector((state: StateInterface) => state.auth);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }
  return (
    <LayoutContainer>
      <Profile />
    </LayoutContainer>
  );
};
