import React from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import { useParams } from 'react-router-dom';
import StudentsListNavigation from 'components/molecules/StudentsListNavigation/StudentsListNavigation';
import { DashboardWrapper } from 'components/atoms/DashboardWrapper/DashboardWrapper';
import { Navigate } from 'react-router-dom';
import { groups } from 'mocks/data/groups';

const Dashboard = () => {
  const { id } = useParams();

  if (!id) return <Navigate to={`/group/${groups[0]}`} />;

  return (
    <DashboardWrapper>
      <StudentsListNavigation group={id} />
      <ViewWrapper>
        <UsersList />
      </ViewWrapper>
    </DashboardWrapper>
  );
};

export default Dashboard;
