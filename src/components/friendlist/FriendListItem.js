import React from 'react';
import PropTypes from 'prop-types';
import { Container, OnlineStatus, OfflineStatus } from './FriendList.styled';

const FriendListItem = ({ avatar, friendname, isOnline }) => {
  return (
    <Container>
      {isOnline ? (
        <OnlineStatus></OnlineStatus>
      ) : (
        <OfflineStatus></OfflineStatus>
      )}
      {/* <span class="status">{isOnline}</span> */}
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{friendname}</p>
    </Container>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  friendname: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
