import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Avatar,
  UserName,
  Tag,
  Stats,
  StatsLi,
  Label,
  Quantity,
} from './Profile.styled';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <Container>
      <div>
        <Avatar src={avatar} alt="User avatar" width="280" />
        <UserName>{username}</UserName>
        <Tag>{tag}</Tag>
        <Tag>{location}</Tag>
      </div>

      <Stats>
        <StatsLi>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsLi>
        <StatsLi>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsLi>
        <StatsLi>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsLi>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
