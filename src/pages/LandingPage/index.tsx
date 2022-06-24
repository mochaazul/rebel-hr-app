import React from 'react';
import { Text } from 'components';
import { useTypedSelector, useCustomDispatch } from 'hooks';
import { removeUser as removeUserData } from 'stores/actions';
import { navigation } from 'helpers';
import LandingPageStyle from './style';

const LandingPage: React.FC = () => {
  const { user } = useTypedSelector(state => state.user);
  const removeUser = useCustomDispatch(removeUserData);
  const { navigate } = navigation();

  const text = user.accessToken ? 'Logout' : 'Login';

  const handleClick = () => {
    if (user.accessToken) {
      removeUser();
    }
    navigate('/login');
  };

  return (
    <LandingPageStyle>
      <Text.H1>Welcome { user.name }</Text.H1>
      <Text.Paragraph onClick={ handleClick }>{ text }</Text.Paragraph>
    </LandingPageStyle>
  );
};

export default LandingPage;
