import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import { ListOfFriends } from './FriendList.styled';

function FriendList({ friends }) {
  return (
    <ListOfFriends>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            friendname={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ListOfFriends>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      friendname: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
