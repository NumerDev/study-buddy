import React, { useEffect, useState } from 'react';
import { StatusInfo, SearchBarWrapper, SearchWrapper, SearchResults } from './SearchBar.styles';
import { Input } from 'components/atoms/Input/Input';
import { useStudents } from 'hooks/useStudents';
import debounce from 'lodash.debounce';

export const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [matchingStudents, setMatchingStudents] = useState('');
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async (e) => {
    const { students } = await findStudents(searchPhrase);
    setMatchingStudents(students);
  }, 500);

  useEffect(() => {
    if (!searchPhrase) return;
    getMatchingStudents(searchPhrase);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchPhrase]);

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>User562</strong>
        </p>
      </StatusInfo>
      <SearchWrapper>
        <Input
          onChange={(e) => {
            setSearchPhrase(e.target.value);
          }}
        />
        {searchPhrase && matchingStudents.length ? (
          <SearchResults>
            {matchingStudents.map((student) => (
              <li key={student.id}>{student.name}</li>
            ))}
          </SearchResults>
        ) : null}
      </SearchWrapper>
    </SearchBarWrapper>
  );
};
