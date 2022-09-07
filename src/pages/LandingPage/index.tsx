import React from 'react';
import { Text } from 'components';
import { useTypedSelector, useAppDispatch } from 'hooks';
import { removeUser as removeUserData, editName as editNameAction } from 'stores/actions';
import { navigation } from 'helpers';
import LandingPageStyle from './style';
import { UserData, UserState } from 'interface';

const LandingPage = () => {
  const { user }  = useTypedSelector<UserState>('user');
  const removeUser = useAppDispatch(removeUserData);
  const editName = useAppDispatch<UserData>(editNameAction);
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
      <Text.H1 onClick={ () => editName({ name: 'Mansyur' }) }>Welcome { user.name }</Text.H1>
      <Text.Paragraph onClick={ handleClick }>{ text }</Text.Paragraph>
    </LandingPageStyle>
  );
};

export default LandingPage;
