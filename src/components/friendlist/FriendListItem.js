import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, friendName, isOnline }) => {
  return (
    <div>
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{friendName}</p>
    </div>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  friendName: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
