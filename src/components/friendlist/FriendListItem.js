import PropTypes from 'prop-types';
import defaultImage from './default.jpg';

const friends = ({ avatar = defaultImage, name, isOnline }) => {
  return (
    <div>
      <li className="item">
        <span className={isOnline ? `green` : `red`}></span>
        <img
          className="avatar"
          src={avatar}
          alt="картинка пользователя"
          width="48"
        />
        <p className={name}></p>
      </li>
      ;
    </div>
  );
};

friends.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default friends;
