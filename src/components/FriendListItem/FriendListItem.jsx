import css from './FriendListItem.module.css';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
   return (
      <li key={id} className={css.item} >
         <span className={`${css.status} ${isOnline === true ? (css.online) : (css.offline)}`}></span>
         <img className={css.avatar} src={avatar} alt={name} width="48" />
         <p className={css.name}>{name}</p>
      </li>
   )
}