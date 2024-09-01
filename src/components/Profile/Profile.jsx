import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.container}>
      <div className={s.user_wrapper}>
        <img className={s.avatar} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.text}>{tag}</p>
        <p className={s.text}>{location}</p>
      </div>
      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.status}>Followers</span>
          <span className={s.status_num}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.status}>Views</span>
          <span className={s.status_num}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span className={s.status}>Likes</span>
          <span className={s.status_num}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;