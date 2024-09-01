import clsx from "clsx";
import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, status }) => {
  return (
    <div className={s.wrapper}>
      <img className={s.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
      <p className={clsx(status ? s.status_on : s.status_off)}>
        {status ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;