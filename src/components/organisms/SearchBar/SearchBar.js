import React, { useState } from 'react';
import { StatusInfo, SearchBarWrapper, SearchWrapper, SearchResults, SearchItem } from './SearchBar.styles';
import { Input } from 'components/atoms/Input/Input';
import { useStudents } from 'hooks/useStudents';
import debounce from 'lodash.debounce';
import { useCombobox } from 'downshift';

export const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async ({ inputValue }) => {
    const { students } = await findStudents(inputValue);
    setMatchingStudents(students);
  }, 500);

  const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
  });

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>User562</strong>
        </p>
      </StatusInfo>
      <SearchWrapper {...getComboboxProps()}>
        <Input {...getInputProps()} name="search" id="search" />

        <SearchResults isOpen={isOpen && matchingStudents.length > 0} {...getMenuProps()}>
          {isOpen &&
            matchingStudents.map((item, index) => (
              <SearchItem highlighted={highlightedIndex === index} {...getItemProps({ item, index })} key={item.id}>
                {item.name}
              </SearchItem>
            ))}
        </SearchResults>
      </SearchWrapper>
    </SearchBarWrapper>
  );
};
