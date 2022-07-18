import React, { useState } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import { useParams } from 'react-router-dom';
import StudentsListNavigation from 'components/molecules/StudentsListNavigation/StudentsListNavigation';
import { DashboardWrapper } from 'components/atoms/DashboardWrapper/DashboardWrapper';
import { Navigate } from 'react-router-dom';
import { groups } from 'mocks/data/groups';
import useModal from './../components/organisms/Modal/useModal';
import { useStudents } from 'hooks/useStudents';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';

const Dashboard = () => {
  const { id } = useParams();
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [currentStudent, setCurrentStudent] = useState();
  const { getStudentById } = useStudents();

  const handleOpenStudentDetails = async (id) => {
    const student = await getStudentById(id);
    setCurrentStudent(student);
    handleOpenModal();
  };

  if (!id) return <Navigate to={`/group/${groups[0]}`} />;

  return (
    <DashboardWrapper>
      <StudentsListNavigation group={id} />
      <ViewWrapper>
        <UsersList handleOpenStudentDetails={handleOpenStudentDetails} />
        {isOpen ? (
          <Modal handleClose={handleCloseModal}>
            <StudentDetails student={currentStudent} />
          </Modal>
        ) : null}
      </ViewWrapper>
    </DashboardWrapper>
  );
};

export default Dashboard;
