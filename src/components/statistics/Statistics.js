import React from 'react';
import PropTypes from 'prop-types';
import { Label, Percentage } from './Statistics.styled';

const Statistics = ({ label, percentage }) => {
  return (
    <div>
      <Label className="label">{label}</Label>
      <Percentage className="percentage">{percentage}%</Percentage>
    </div>
  );
};

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
