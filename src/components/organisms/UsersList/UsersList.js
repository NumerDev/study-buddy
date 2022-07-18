import React, { useEffect, useState } from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UserList.styles';
import PropTypes from 'prop-types';
import { Title } from 'components/atoms/Title/Title';
import { UserShape } from 'types';
import { useStudents } from 'hooks/useStudents';
import { useParams } from 'react-router-dom';

const UsersList = ({ handleOpenStudentDetails }) => {
  const { id } = useParams();
  const [students, setStudents] = useState([]);
  const { getStudentsByGroup } = useStudents();

  useEffect(() => {
    (async () => {
      const students = await getStudentsByGroup(id);
      setStudents(students);
    })();
  }, [getStudentsByGroup, id]);

  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students.map((userData) => (
          <UsersListItem onClick={() => handleOpenStudentDetails(userData.id)} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UsersList;
