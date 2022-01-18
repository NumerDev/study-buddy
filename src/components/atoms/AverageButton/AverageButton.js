import React from 'react';
import PropTypes from 'prop-types';
import { StyledAverage } from './AverageButton.styles';

const AverageButton = ({ avg }) => <StyledAverage avg={avg}>{avg}</StyledAverage>;

AverageButton.propTypes = {
  avg: PropTypes.string,
};

export default AverageButton;
