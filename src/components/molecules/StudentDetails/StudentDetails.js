import { StyledAverage } from 'components/atoms/AverageButton/AverageButton.styles';
import { Title } from './../../atoms/Title/Title';

const StudentDetails = ({ student }) => {
  return (
    <div>
      <Title>
        {student.name} | Group {student.group}
      </Title>
      <p>{student.attendance}</p>
      <StyledAverage avg={student.average}>{student.average}</StyledAverage>
    </div>
  );
};
export default StudentDetails;
