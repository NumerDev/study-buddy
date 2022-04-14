import React from 'react';
import { StatusInfo, SearchBarWrapper } from './SearchBar.styles';
import { Input } from 'components/atoms/Input/Input';

export const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p className="username">User562</p>
      </StatusInfo>
      <Input />
    </SearchBarWrapper>
  );
};
