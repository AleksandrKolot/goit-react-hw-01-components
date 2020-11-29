import React from 'react';
import PropTypes from 'prop-types';
import s from './FrendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      {/* <li className={s.item}> */}
        <span className={
          isOnline ? s.onlineMark : s.offlineMark}></span>
        <img
          className={s.avatar}
          src={avatar}
          alt="картинка пользователя"
          width="48"
        />
        <p className={s.name}>{name}</p>
      {/* </li> */}
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
