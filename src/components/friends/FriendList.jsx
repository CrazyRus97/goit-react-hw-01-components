import React from 'react';
import css from './FriendList.module.css'


export const Friends = ({ friends }) => {
    const statusOnline = {
        backgroundColor: 'green',
    };
    const statusOffline = {
        backgroundColor: 'red',
    };

    return (
        <section className={css.friendsSection}>
            <ul className={css.friendList}>
                {friends.map((friend) => (
                    <li className={css.item} id={friend.id} key={friend.id}>
                        {friend.isOnline ? (
                            <p className={css.status} style={statusOnline}>{friend.isOnline}</p>
                        ) : (
                            <p className={css.status} style={statusOffline}>{friend.isOnline}</p>
                        )}
                        <img src={friend.avatar} alt="User avatar" width="48" className={css.avatar} />
                        <p className={css.name}>{friend.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};