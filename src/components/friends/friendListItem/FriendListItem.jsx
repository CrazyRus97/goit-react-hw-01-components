import React from 'react';

import './FriendListItem.styles.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span className={isOnline ? 'online' : 'offline'}></span>
      <img className="avatar" src={avatar} alt="User avatar" />
      <p className="name">{name}</p>
    </li>
  );
};