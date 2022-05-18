import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { groups } from 'mocks/data/groups';
import React, { useRef, useState } from 'react';
import { DialogContent, DialogWrapper, StudentsNavWrapper, DialogLink, DialogTitle } from './StudentsListNavigation.styles.';

const StudentsListNavigation = ({ group }) => {
  const dialog = useRef(null);
  const [isOpened, setIsOpened] = useState(false);

  const toggleModal = () => {
    if (isOpened) {
      dialog.current.close();
      setIsOpened(false);
    } else {
      dialog.current.showModal();
      setIsOpened(true);
    }
  };

  return (
    <StudentsNavWrapper>
      <Title>Group: {group || 'A'}</Title>
      <DialogWrapper ref={dialog}>
        <DialogContent>
          <DialogTitle>Select a group</DialogTitle>
          <p>Group</p>
          {groups.map((group) => {
            return (
              <DialogLink onClick={() => toggleModal()} to={`${group}`}>
                {group}
              </DialogLink>
            );
          })}
        </DialogContent>
      </DialogWrapper>
      <Button onClick={() => toggleModal()}>change group</Button>
    </StudentsNavWrapper>
  );
};

export default StudentsListNavigation;
