import React from 'react';
// import PropTypes from 'prop-types';
import { UserInfoo } from './UserInfo.styles';

const UserInfo = (prop) => (
  <div>
    <UserInfoo isBold isLarge>
      {prop.name}
    </UserInfoo>
    <UserInfoo>attendance: {prop.attendance}</UserInfoo>
  </div>
);

// UserInfo.propTypes = {};

export default UserInfo;
