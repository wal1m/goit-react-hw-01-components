import React from 'react';
import PropTypes from 'prop-types';
import AvatarDefault from '../img/avatar-default.svg';
import styles from '../Profile/Profile.module.css';

const SocialUser = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className={styles.profile}>
      <div className="description">
        <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.list}>
          <span className={styles.label}>Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className={styles.list}>
          <span className={styles.label}>Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className={styles.list}>
          <span className={styles.label}>Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

SocialUser.defaultProps = {
  avatar: AvatarDefault,
};

SocialUser.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default SocialUser;
