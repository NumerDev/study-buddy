import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper } from './UsersListItem.styles';
import AverageButton from 'components/atoms/AverageButton/AverageButton';
import UserInfo from 'components/atoms/UserInfo/UserInfo';

const UsersListItem = ({ deleteUser, userData: { name, average, attendance = '0%' } }) => (
  <Wrapper>
    <AverageButton avg={average} />
    <UserInfo name={name} attendance={attendance} />
    <DeleteButton onClick={() => deleteUser(name)} />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
