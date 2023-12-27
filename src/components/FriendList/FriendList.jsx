import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
   return (
      <ul className={css.friends}>
         {friends.map(({ id, avatar, name, isOnline }) => (
            <FriendListItem
               key={id}
               avatar={avatar}
               name={name}
               isOnline={isOnline}
            />
         ))}
      </ul>
   )
}

FriendList.propTypes = {
   friends: PropTypes.arrayOf(
      PropTypes.exact({
         avatar: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         isOnline: PropTypes.bool.isRequired,
         id: PropTypes.number.isRequired
      }),
   ),
}