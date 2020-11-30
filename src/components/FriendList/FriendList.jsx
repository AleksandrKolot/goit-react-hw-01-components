import FriendListItem from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import s from'./FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className="friendList">
      {friends.map(friend => (
      <li key={friend.id} className={s.item}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default FriendList;
