import axios from 'axios';
import { useCallback } from 'react';

export const useStudents = () => {
  const getGroups = async () => {
    try {
      const result = await axios.get('/groups');
      return result.data.groups;
    } catch (e) {
      console.log(e);
    }
  };

  const getStudentById = useCallback(async (studentId) => {
    try {
      const result = await axios.get(`/students/${studentId}`);
      return result.data.students;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getStudentsByGroup = useCallback(async (groupId) => {
    try {
      const result = await axios.get(`/groups/${groupId}`);
      return result.data.students;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const findStudents = useCallback(async (searchPhrase) => {
    try {
      const { data } = await axios.post(`/students/search`, {
        searchPhrase,
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  }, []);

  return {
    getGroups,
    getStudentById,
    getStudentsByGroup,
    findStudents,
  };
};
