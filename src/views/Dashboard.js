import React, { useEffect, useState } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import StudentsListNavigation from 'components/molecules/StudentsListNavigation/StudentsListNavigation';
import { DashboardWrapper } from 'components/atoms/DashboardWrapper/DashboardWrapper';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/students/${id || groups[0]}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err));
  }, [id, groups]);

  return (
    <DashboardWrapper>
      <StudentsListNavigation group={id} />
      <ViewWrapper>
        <UsersList users={students} />
      </ViewWrapper>
    </DashboardWrapper>
  );
};

export default Dashboard;
