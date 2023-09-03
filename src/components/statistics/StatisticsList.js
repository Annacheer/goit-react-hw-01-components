import Statistics from './Statistics';
import PropTypes from 'prop-types';
import { StatList, Item } from './Statistics.styled';

function StatisticsList({ items }) {
  return (
    <StatList className="stat-list">
      {items.map(item => (
        <Item className="item" key={item.id}>
          <Statistics label={item.label} percentage={item.percentage} />
        </Item>
      ))}
    </StatList>
  );
}
StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default StatisticsList;
