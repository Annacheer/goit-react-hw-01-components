import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableData } from './Transaction.styled';

const Transaction = ({ type, amount, currency, isEven }) => {
  return (
    <TableRow>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </TableRow>
  );
};
Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Transaction;
