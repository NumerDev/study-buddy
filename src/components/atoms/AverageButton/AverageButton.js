import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './AverageButton.styles';

const AverageButton = ({ avg }) => <Button avg={avg}>{avg}</Button>;

AverageButton.propTypes = {
  avg: PropTypes.string,
};

export default AverageButton;
