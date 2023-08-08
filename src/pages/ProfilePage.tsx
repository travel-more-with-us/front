import React from 'react';
import { LayoutContainer } from '../Components/Layout/LayoutContainer';
import { Profile } from '../Components/Profile/Profile';
import { useSelector } from 'react-redux';
import { StateInterface } from '../types/reduxTypes';
import { useNavigate } from 'react-router-dom';
import { useScrollTop } from '../hooksAndHelpers/useScrollTop';

export const ProfilePage = () => {
  const isAuthenticated = useSelector((state: StateInterface) => state.auth);
  const navigate = useNavigate();
  useScrollTop();

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
