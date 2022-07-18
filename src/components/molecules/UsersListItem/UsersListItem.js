import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper } from './UsersListItem.styles';
import AverageButton from 'components/atoms/AverageButton/AverageButton';
import UserInfo from 'components/atoms/UserInfo/UserInfo';
import { UserShape } from 'types';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData: { name, average, attendance = '0%' }, ...props }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper {...props}>
      <AverageButton avg={average} />
      <UserInfo name={name} attendance={attendance} />
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
