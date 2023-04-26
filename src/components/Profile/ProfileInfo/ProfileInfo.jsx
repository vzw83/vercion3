import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.inner}>
        <img
          src="https://sportishka.com/uploads/posts/2022-11/1667553693_45-sportishka-com-p-more-vkontakte-51.jpg"
          alt="#"
        />
      </div>
      <div className={s.avatarBlock}>ava + discription</div>
    </div>
  );
};

export default ProfileInfo;
