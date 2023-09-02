import PropTypes from 'prop-types';
import user from './user.json';

const Profile = ({
  followers,
  views,
  likes,
}) => {
  return (
    <div class="profile">
      <div class="description">
        <img
          src={user.avatar}
          alt="User avatar"
          class="avatar"
          width="480"
        />
        <p class="name">{user.username}</p>
        <p class="tag">{user.tag}</p>
        <p class="location">{user.location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  )
}

Profile.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;